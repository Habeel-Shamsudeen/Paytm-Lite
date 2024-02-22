const { Router } = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose} = require("mongoose");
const { z } = require("zod");

const router = Router();

router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const account = await Account.findOne({
      userId: req.userId,
    });
    res.status(200).json({
      balance: account.balance,
    });
  } catch (err) {
    return console.log("Error while retrieving balance");
  }
});

const transactionSchema = z.object({
    to:z.string(),
    amount:z.number()
})
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const { success } = transactionSchema.safeParse(req.body);
  if(!success){
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid request",
    });
  }
  const { amount, to } = req.body;
  const account = await Account.findOne({
    userId: req.userId,
  }).session(session);
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }
  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);

  await session.commitTransaction();
  res.json({
    message: "Transfer successful",
  });
});

module.exports = router;
