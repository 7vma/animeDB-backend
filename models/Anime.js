

const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
     
        
        mal_id: Number,
url: String,

title: String,
episodes: Number,
synopsis: String
    
   
    
      });

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = Anime;