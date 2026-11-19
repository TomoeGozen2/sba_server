import express from 'express'

export const router = express.Router();


router.get('/movies', (req, res) => {
    res.send('Movies route working!')
})