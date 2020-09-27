const { Shema, model, Types } = require("mongoose");

const schema = new Shema({
  email: { type: String, required: true, unique: true },
  pasword: { type: String, required: true },
  links: [{ type: Types.ObjectID, ref: "Link" }]
});

module.exports = model((name: "User"), schema);
