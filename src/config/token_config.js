require("dotenv").config()

module.exports = {
    JWT_SECRET : process.env.JWT_SECRET,
    REFRESH_SECRET : process.env.REFRESH_SECRET,
    TOKEN_EXPIRY : '1m',
    REFRESH_EXPIRY : '1d' 
}