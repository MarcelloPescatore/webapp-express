const express = require('express')
const server = express()
const HOST = process.env.HOST || 'http://localhost'
const PORT = process.env.PORT || '3001'

const MoviesRoutes = require('./routes/movies')

// Movies Routes
server.get('/', (req, res) => {
    res.send(`Server is up and running!`);
})

server.use('/api/movies', MoviesRoutes )

server.listen(PORT, () => {
    console.log(`Server in ascolto ${HOST}:${PORT}`);
})