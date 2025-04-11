const jwt = require("jsonwebtoken");
const { JWT_SECRET, REFRESH_SECRET, TOKEN_EXPIRY, REFRESH_EXPIRY } = require("../config/config");

exports.generateTokens = (user) => {
  const accessToken = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
  const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRY });

  return { accessToken, refreshToken };
};