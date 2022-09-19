///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const router = express.Router();
const axios = require('axios')
const request =require('request')
const {Anime} = require('../models');
const { json } = require("express");
console.log({Anime})

///////////////////////////////
// MODELS
////////////////////////////////



///////////////////////////////
// ROUTES
////////////////////////////////
// const data = axios.get(
//   'https://api.jikan.moe/v4/top/anime/?type="tv" "movie"&filter="bypopularity"&page=1&limit=1')
    
//         // Print data
//         .then(response => {response.data
            
//           //  console.log(response.data)
//         })
    
        // Print error message if occur
        // .catch(error => console.log(
        //       'Error to fetch data\n'))
        //       const url = 'https://api.jikan.moe/v4/top/anime/?type="tv" "movie"&filter="bypopularity"&page=1&limit=1'



        //       const getData = () => {
        //         fetch(url)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
        //       }
              
// PEOPLE INDEX ROUTE
// router.get("/", async (req, res) => {
//   try {
//     // get all people
//     const anime = await Anime.find({})
//     console.log("testing anime list", anime)
//     res.json(anime);
//   } catch (error) {
//     //send error
//     console.log(error)
//     res.status(400).json(error);
//   }
// });
/////works but doesnt show data on browser 
// router.get("/", async (req, res) => {
  
// 	res.json(getData())
// });


//
router.get('/', async (req, res) => {
  try {
      res.status(200).json(await Anime.find({}));
      
  } catch(err) {
      console.log(err);
  }
})

// // PEOPLE CREATE ROUTE
// router.post("/", async (req, res) => {
//   try {
//     // create new person
//     res.json(await Anime.create(req.body));
//   } catch (error) {
//     //send error

//     res.status(400).json(error);
//   }
// });

//PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
  try {
    // send one person
    res.json(await Anime.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// // PEOPLE UPDATE ROUTE
// router.put("/:id", async (req, res) => {
//   try {
//     // update people by ID
//     res.json(
//       await Anime.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     );
//   } catch (error) {
//     //send error
//     res.status(400).json(error);
//   }
// });

// // PEOPLE DELETE ROUTE
// router.delete("/:id", async (req, res) => {
//   try {
//     // delete people by ID
//     res.json(await Anime.findByIdAndRemove(req.params.id));
//   } catch (error) {
//     //send error
//     res.status(400).json(error);
//   }
// });

module.exports = router;
