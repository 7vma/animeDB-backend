

const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
    data : {
        mal_id: Number,
url: String,
images: {},
name: String,
name_kanji: String,
nicknames: [],
favorites: Number,
about: String
    } 
   
    
});

const Anime = mongoose.model("anime", AnimeSchema);

module.exports = Anime;