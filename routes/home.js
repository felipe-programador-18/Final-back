const express = require('express')
const router = express.Router()

router.get('/produtos', (req, res) => {
    res.send('produtos privados')
})





module.exports = router