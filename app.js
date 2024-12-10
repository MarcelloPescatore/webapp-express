const express = require('express')
const server = express()
const connection = require('./database/connection')


const HOST = process.env.HOST || 'http://localhost'
const PORT = process.env.PORT || '3001'


server.listen(PORT, () => {
    console.log(`Server in ascolto ${HOST}:${PORT}`);
})