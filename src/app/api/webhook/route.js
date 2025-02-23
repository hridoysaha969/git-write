import dbConnect from "@/lib/connection";
import { PLANS } from "@/lib/constant";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

export async function POST(req) {
  await dbConnect();
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const email = session.customer_email;
      const planId = session.metadata?.planId; // Plan ID from checkout metadata

      if (!email || !planId) {
        return NextResponse.json(
          { message: "Invalid session data", success: false },
          { status: 400 }
        );
      }

      // Find plan details from local file
      const plan = PLANS.find((p) => p.id === planId);
      if (!plan) {
        return NextResponse.json(
          { message: "Plan not found", success: false },
          { status: 400 }
        );
      }

      // Update user credits
      await User.findOneAndUpdate(
        { email },
        { $inc: { credits: plan.credits } }, // Add credits
        { new: true, upsert: true }
      );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
