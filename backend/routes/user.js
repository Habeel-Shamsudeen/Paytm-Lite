const { Router } = require("express");
const z = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = Router();

const signUpSchema = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

const signinSchema = z.object({
  username: z.string().email(),
  password: z.string(),
});

router.post("/signup", async (req, res) => {
  const UserDetails = req.body;
  const result = signUpSchema.safeParse(UserDetails);
  if (!result.success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const existingUser = await User.findOne({ username: UserDetails.username });
  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const user = await User.create({
    username: UserDetails.username,
    firstName: UserDetails.firstName,
    lastName: UserDetails.lastName,
    password: UserDetails.password,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  res.json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const result = signinSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (!user) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }
  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );
  return res.status(200).json({
    token: token,
  });
});
module.exports = router;