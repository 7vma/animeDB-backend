

const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
    data : [ 
        {
        mal_id: Number,
url: String,

title: String,
episodes: Number,
synopsis: String
    }
   
    
      ]});

const Anime = mongoose.model("anime", AnimeSchema);

module.exports = Anime;