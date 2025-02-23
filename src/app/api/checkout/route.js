import dbConnect from "@/lib/connection";
import { Transaction } from "@/lib/models/Transaction";
import { User } from "lucide-react";
import { NextResponse } from "next/server";

const { default: Stripe } = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

export async function POST(req) {
  const payload = await req.json();
  const { id, title, amount, credits, email } = payload;
  await dbConnect();

  if (!id || !title || !amount || !credits || !email) {
    return NextResponse.json(
      {
        message: "Required fields are missing",
        success: false,
      },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ email: payload.email });
    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized!", success: false },
        { status: 404 }
      );
    }
    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: payload.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `GitWrite ${payload.title} Plan`,
            },
            unit_amount: payload.amount * 100, // Convert dollars to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      metadata: { planId: payload.id.toString() }, // Attach plan ID for webhook
    });

    const transaction = new Transaction({
      sessionId: session.id,
      amount: payload.amount,
      email: payload.email,
    });

    await transaction.save();

    return NextResponse.json(
      { sessionId: session.id, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
