const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = "express-validator";
const User = require("../models/User");
const config = require("config");

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Wrong email").isEmail(),
    check("pasword", "Minimal length 6 digits").isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          massage: "Wrong registration data"
        });
      }
      const { email, pasword } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ massage: "Such user is already existed" });
      }

      const hashPasword = await bcrypt.hash(pasword, 12);
      const user = new User({ email, pasword: hashPasword });

      await user.save();

      res.status(201).json({ massage: "User existed" });
    } catch (e) {
      res.status(500).json({ massage: "Something wrong" });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Input correct email").normalizeEmail().isEmail(),
    check("password", "input pasword").exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          massage: "Wrong connection data"
        });
      }

      const { email, pasword } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ vassage: "User not found" });
      }

      const isMatch = await bcrypt.compare(pasword, user.Pasword);

      if (!isMatch) {
        return res.status(400).json({ message: "Wrong password try again" });
      }
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h"
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ massage: "Something wrong" });
    }
  }
);

module.extorts = router;
