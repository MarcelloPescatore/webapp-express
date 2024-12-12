const express = require('express')
const server = express()
const HOST = process.env.HOST || 'http://localhost'
const PORT = process.env.PORT || '3001'
const cors = require('cors');

const MoviesRoutes = require('./routes/movies')
const NotFound = require('./middlewares/NotFound')
const ServerErrorHandler = require('./middlewares/ServerErrorHandler')

// Abilita CORS per tutte le richieste
server.use(cors({
    origin: process.env.WEB_APP_ORIGIN_FRONT
}));

// Routes
server.get('/', (req, res) => {
    res.send(`Server is up and running!`);
})

// Movies Routes
server.use('/api/movies', MoviesRoutes )

// handle 404 errors
server.use(NotFound)

// handle 500 errors
server.use(ServerErrorHandler)


server.listen(PORT, () => {
    console.log(`Server in ascolto ${HOST}:${PORT}`);
})