const mongoose = require("mongoose");



const reviewSchema = new mongoose.Schema ({
    post:{type: String, required:true}



});


const AnimeSchema = new mongoose.Schema({
 mal_id: Number,
url: String,
title: String,
episodes: Number,
synopsis: String,
reviews: [reviewSchema]
      });

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = Anime;