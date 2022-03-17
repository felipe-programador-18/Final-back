const express = require('express')
const router = express.Router()

router.get('/produtos', (req, res) => {
   res.render('produtos')
})





module.exports = router