const express = require('express')
const app = express()
const mongoose = require('mongoose')
const movies = require('./dataMovies.js')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/moovicedb');
}
main()
const movieSchema = new mongoose.Schema({
    overview: String,
    poster_path: String,
    release_date: String,
    title: String,
    popular:Boolean
});

const movieModel = mongoose.model('movies', movieSchema);
// movieModel.insertMany(movies)

app.get('/movies/popular', (req, res, next)=>{
    movieModel.find({popular:true})
               .select('overview popular')
              .then(data=>{
            res.json(data)
    })
})

  
app.listen(3)
