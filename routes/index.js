var express = require('express');
var nodeFetch = require ('node-fetch');
var router = express.Router();

let API_KEY = process.env.api_key

router.get('/movies', (req, res) => {
    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.api_key}`)
    .then (response => response.json())
  //.then (data => console.log(data));
  .then (data => res.json({ movies: data.results }));

})












module.exports = router;
