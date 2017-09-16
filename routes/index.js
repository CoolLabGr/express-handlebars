const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('pages/home', {title: 'xServer with Handlebars', headerTitle: 'coolLab'})
})

module.exports = router