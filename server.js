/////////////////////////
// DEPENDENCIES
/////////////////////////
// initialize .env variables

require('dotenv').config();

const mongoose = require('mongoose');



const express = require("express")
const axios = require('axios')
const { MONGODB_URI } = process.env;
const PORT = 4000;
const animeControl = require('./controllers/anime-controller')

const cors = require('cors')
const morgan = require('morgan')

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("This is my awesome amazing connection man"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));
///////////////////////////////
// MIDDLEWARE
////////////////////////////////



//app.use('/anime', animeControl)
///
const app = express()
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
app.use('/anime', animeControl)


    



/////////////////////////
// Routes
/////////////////////////

// home route that says "hello world" to test server is working
// app.get("/", (req, res) => {
//     //res.json let's us send a response as JSON data
//     res.json({
//         response: "Hello World"
//     })
// })

/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})