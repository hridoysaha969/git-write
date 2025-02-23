const { default: mongoose } = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);
