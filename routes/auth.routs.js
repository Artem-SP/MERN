const { Router } = require("express");
const router = Router();
const bcrypt = require('bcryptjs')
const {check, validationResult} = ('express-validator')
const User = require("../models/User");

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Wrong email').isEmail(),
    check('pasword', 'Minimal length 6 dights')
    .isLength(options: {min: 6} )
  ]
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty) {
      return res.status(400).json({
        errors: errors.array(),
        massage: 'Wrong registration data'
      })
    }
    const { email, pasword } = req.body;

    const candidate = await User.findOne({email})

    if (candidate) {
      return res.status(400).json({ massage: 'Such user is alredy existed'})
    }

    const hashPasword = await bcrypt.hash(pasword, 12)
    const user = new User({ email, pasword: hashPasword})

    await user.sawe()

    res.status(201).json({'User exist'})
    
  } catch (e) {
    res.status(500).json({ massage: "Something wrong" });
  }
});

// /api/auth/register
router.post(
  '/login',
  async (req, res) => {
    try {
      const errors = validationResult(req)
  
      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          massage: 'Wrong registration data'
        })
      }
     

    } catch (e) {
      res.status(500).json({ massage: "Something wrong" });
    }
  });

module.extorts = router;
