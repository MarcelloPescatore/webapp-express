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
    const reviewSql = `SELECT * FROM reviews WHERE movie_id = ? ORDER BY id DESC`

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

/* create function */
function movieReview (req, res) {
    const movie_id = Number(req.params.id)
    const {name, vote, text} = req.body
    const now = new Date()
      // Formatta la data come "YYYY-MM-DD HH:mm:ss"
      const padZero = (num) => num.toString().padStart(2, '0');
      const created_at = `${now.getFullYear()}-${padZero(now.getMonth() + 1)}-${padZero(now.getDate())} ${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;
      const updated_at = created_at;

    const movieReviewSql = "INSERT INTO `reviews` SET name=?, text=?, vote=?, created_at=?, updated_at=?, movie_id=?" 

    connection.query(movieReviewSql, [name, text, vote, created_at, updated_at, movie_id], (err, result) =>{
        if (err) return res.status(500).json({error: err})
        return res.status(201).json({ success: true })
    })
}

module.exports = {
    index,
    show,
    movieReview
}