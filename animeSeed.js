require("dotenv").config();
const { MONGODB_URI } = process.env;

// Add in mongoose
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
        const myAnime = await fetch('https://api.jikan.moe/v4/characters/1');
        const allAnime = await myAnime.json();
        console.log('hello', myAnime);
        // const deletedBreweries = await Breweries.deleteMany({})
        // const addedBreweries = await Breweries.insertMany(allAnime);
        // console.log(deletedBreweries);
        // console.log(addedBreweries);
    } catch(err) {
        console.log(err);
    }
}

seedingData();