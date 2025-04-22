const jwt = require("jsonwebtoken")
const {REFRESH_SECRET} = require("../config/token_config")
const { generateTokens} = require("../utils/generate_token")


exports.login = (req, res)=>{
    const {username, password} = req.body;

    if(username !== "admin" || password !== "admin" ){
        return res.status(401).json({error:"Invalid username or password"})
    }
    const user = {id:1, username:'admin'}
    const token = generateTokens(user)
    refreshToken.push(token.refreshToken)

    res.json(token)
}
let refreshToken = []

exports.refreshToken = (req, res)=>{
    const {refreshToken} = req.body
    if(!refreshToken || !refreshToken.includes(refreshToken)){
        return res.status(401).json({error:"Invalid Refresh Token..."})
    }

    jwt.verify(refreshToken, REFRESH_SECRET , (err, user)=>{
        if(err) return res.status(403).json({error:"Token Expired or Invaild"})
        const newTokens = generateTokens({id:user.id, role:"admin"})
        refreshToken = refreshToken.filter((token)=> token !== refreshToken)
        refreshToken.push(newTokens.refreshToken)

        res.json({message:"Refresh Token generated..."},newTokens)
    })
}

exports.logout = (req, res) => {
    const { refreshToken } = req.body;
    refreshToken = refreshToken.filter((token) => token !== refreshToken);
    res.json({ message: "Logged out successfully" });
};