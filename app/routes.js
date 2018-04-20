var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "Three or more"){
    // Send user to next page
    res.redirect('/clown-school')
  }
  else if (jugglingBalls == "One or two" || jugglingBalls == "None - I can not juggle") {
    res.redirect('/ineligible')
  }
  else {
    // Send user to ineligible page
    res.redirect('/juggling-balls-error')

  }

})


router.post('/clown-school-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var clownSchool = req.session.data['clown-school']

  // Check whether the variable matches a condition
  if (clownSchool == "Yes"){
    // Send user to next page
    res.redirect('/juggling-trick')
  }
  else if (clownSchool == "No") {
    res.redirect('/go-to-school')
  }
  else {
    // Send user to ineligible page
    res.redirect('/clown-school')

  }

})



module.exports = router
