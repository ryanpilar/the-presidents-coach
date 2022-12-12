
const express = require('express')
// we will be using the router in express
const router = express.Router()   
// middleware that we wrote specifically to secure the dashboard and signin page from access when user is not logged in
// const { ensureAuth } = require('../middleware/auth')

// const Story = require('../models/Story')


// @desc    Show add page
//              - in order to use this file, just like the others, we need to bring in the route to the app.js
// @route   Get /stories/add
router.get('/add', ensureAuth, (req, res) => {
res.render('stories/add')
})





module.exports = router