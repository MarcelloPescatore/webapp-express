const express = require('express')
const router =  express.Router()

const MoviesController = require('../controllers/MoviesController')

// tutti i film
router.get('/', MoviesController.index)

// singolo film
router.get('/:id', MoviesController.show)


module.exports = router