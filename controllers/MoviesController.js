const connection = require('../database/connection')


/* index function */
function index (req, res) {
    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({err: err})
        
        res.json({
            movies: results,
            count: results.length
        })
    })
}

/* show function */
function show (req, res) {
    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`

    //recupero le recensioni del film
    const reviewSql = `SELECT * FROM reviews WHERE movie_id = ?`

    // recupero il film associato a quell'id
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({err: err})
        if (results.length == 0) return res.status(404).json({err: 'Movies not found'})
        
        // recupero le recensioni del film
        connection.query(reviewSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({err: err})

            // aggiungo le recensioni al film
            const movie = {
                ...results[0],
                reviews: reviewsResults
            }

            // restituisco i film con recensioni
            res.json(movie)

        })

    })
}

module.exports = {
    index,
    show
}