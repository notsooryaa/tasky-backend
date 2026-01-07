const jwt = require("jsonwebtoken");

const generateAccessToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, admin: user.admin },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

const generateRefreshToken = (user) =>
  jwt.sign(
    { id: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
