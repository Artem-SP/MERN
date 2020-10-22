const jwt = require("jsonwebtoken");
const confif = require("config");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split((separator: " "))[1]; // "Bearer TOKEN"
    if (!token) {
      res.status(401).json({ masage: " Not authorised" });
    }

    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ masage: " Not authorised" });
  }
};
