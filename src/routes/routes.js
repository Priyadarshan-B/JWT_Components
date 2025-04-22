const express = require("express");
const router = express.Router();
const tokenController = require("../controllers/tokenContoller");
// const { authenticateToken } = require("../middleware/auth");

router.post("/login", tokenController.login);
router.post("/refresh", tokenController.refreshToken);
router.post("/logout", tokenController.logout);
// router.get("/protected", authenticateToken, (req, res) => {
//     res.json({ message: "This is a protected route", user: req.user });
//   });

module.exports = router;