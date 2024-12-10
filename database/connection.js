const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if(err) {
        console.log('Error connecting to Db', err);
        return
    }

   console.log('Db is connected');
})

module.exports = connection