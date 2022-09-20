// const express = require("express");
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// const router = express.Router();

// // routes/controllers here
// // SIGN UP
// // POST /api/register
// router.post("/register", async (req, res, next) => {
//     try{
//         const salt = await bcrypt.hash(req.body.password.salt);
//         req.body.password = passwordHash;
//         const newUser = await User.create(req.body);
//         res.status(201).json({
//             currentUser: newUser,
//             isLoggedIn: true
//         })
//     }catch(err){
//         res.status(400).json({err: err.message})
//     }
// });

// // SIGN IN
// // POST /api/login
// router.post("/login", async (req, res, next) => {});



// module.exports = router;

