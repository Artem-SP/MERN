const { Router } = require("express");
const Link = require("../models/Link");
const router = Router();

router.get("/:code", async (req, res) => {
  try {
    const link = await link.findOne({ code: req.params.code });

    if (link) {
    }
    res.status(404).json("Link not found");
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.export = router;
