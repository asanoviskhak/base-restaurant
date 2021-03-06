// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
  const data = {
    greeting: "Welcome to Tamaktap!",
    description: "Order and get your foot in fastest ways possible"
  }
  res.render('index', data)
})

module.exports = router
