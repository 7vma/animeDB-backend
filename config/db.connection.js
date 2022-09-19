// ///////////////////////////////
// // DEPENDENCIES
// ////////////////////////////////

// // pull PORT from .env, give default value of 4000
// const mongoose = require('mongoose');
// const {MONGODB_URI} = process.env
// console.log("Connected to: "+ MONGODB_URI)
// ///////////////////////////////
// // DATABASE CONNECTION
// ////////////////////////////////
// mongoose.connect(MONGODB_URI, (msg)=>console.log(`${msg}`))

// // Connection Events
// mongoose.connection
//   .on("open", () => console.log("Your are connected to mongoose"))
//   .on("close", () => console.log("Your are disconnected from mongoose"))
//   .on("error", (error) => console.log(error));