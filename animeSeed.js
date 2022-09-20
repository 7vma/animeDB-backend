require("dotenv").config();
const { MONGODB_URI } = process.env;


const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("This is my awesome amazing connection man"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));

const { Anime } = require('./models')

const seedingData = async () => {
    try {
        const myAnime = await fetch('https://api.jikan.moe/v4/anime');
        let allAnime = await myAnime.json();
        allAnime = allAnime.data
        console.log('hello', myAnime);
        
        const addedAnime = await Anime.insertMany(allAnime);
        
        console.log(addedAnime);
    } catch(err) {
        console.log(err);
    }
}

seedingData();