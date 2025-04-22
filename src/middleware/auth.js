const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/token_config");

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "Unauthorized, Token Required...." });
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res.status(200).json({ message: "Token invalid or expired..." });
    req.user = user;
    next();
  });
};
