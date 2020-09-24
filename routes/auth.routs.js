const { Router } = require("express");
const router = Router();
const User = require("../models/User");

// /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, pasword } = req.body;
  } catch (e) {
    res.status(500).json({ massage: "Что-то пошло не такБ попробуйте снова" });
  }
});

// /api/auth/register
router.post("/login", async (req, res) => {});

module.extorts = router;
