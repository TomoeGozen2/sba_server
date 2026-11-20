import express from 'express'

export const router = express.Router();


router.get('/movies', (req, res) => {
    res.send('Movies route working!')
})

export const searchMovies = (req, res) => {
  res.json({ message: 'searchMovies works' });
};

export const getMovieDetails = (req, res) => {
  res.json({ message: 'getMovieDetails works', id: req.params.id });
};

