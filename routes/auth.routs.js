const { Router } = require("express");
const router = Router();
const bcrypt = require('bcryptjs')
const {check, validationResult} = ('express-validator')
const User = require("../models/User");

// /api/auth/register
router.post(
  "/register",
  [
    check('email', 'Некоректный email').isEmail(),
    check('pasword', 'Минимальная длина пароля 6 символов')
  ]
  async (req, res) => {
  try {
    const { email, pasword } = req.body;

    const candidate = await User.findOne({email})

    if (candidate) {
      return res.status(400).json({ massage: 'Такой пользователь уже существует'})
    }

    const hashPasword = await bcrypt.hash(pasword, 12)
    const user = new User({ email, pasword: hashPasword})

    await user.sawe()

    res.status(201).json({'Пользователь создан'})
    
  } catch (e) {
    res.status(500).json({ massage: "Что-то пошло не такБ попробуйте снова" });
  }
});

// /api/auth/register
router.post("/login", async (req, res) => {});

module.extorts = router;
