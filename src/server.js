console.log('yo test')
const cors = require('cors');
const path = require('path')
const express = require('express')
const session = require('express-session')   
const mongoose = require('mongoose')
const dotenv = require('dotenv')
                                                

const MongoStore = require('connect-mongo')
                                                // v3 connect-mongo
// const MongoStore = require('connect-mongo')(session)
const morgan = require('morgan')                // when we have a request to a page it will show in the console

                                                // in our form we will have our standard method="POST", 
                                                //      - then we will add a hidden input with the method we actually want to use
const methodOverride = require('method-override')
// VIEW ENGINE:


// where we use the connection string to sign into mongoDB
// const connectDB = require('../config/db')

// LOAD CONFIG:
                                                // to load the config file, we pass in an object by giving it a path to the config file. 
                                                // config.env is where we will have all of our global variables
                                                // the PORT is in the config.env file
dotenv.config({ path: '../.env'})


// connectDB()                                     // connect to mongoDB:
const app = express()                           // initialize our app:
// app.use(cors());

// BODY PARSER
app.use(express.urlencoded( {extended: false}))
app.use(express.json())

// METHOD OVERRIDE 
                                                // a snippet
                                                // checks the request body, its going to look for '_method' and its going to replace it with PUT or DELETE
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
                                                // look in urlencoded POST bodies and delete it:
      let method = req.body._method
      delete req.body._method
      return method
    }
}))
                                                // only run this in developer mode:
console.log('process.env.NODE_ENV', process.env.NODE_ENV)                                                                                 
// if (process.env.NODE_ENV === 'development') {
// LOGGING middlewear:
                                                // there are different arguements you can pass in for different loggin
    app.use(morgan('dev'))                      // makes sure it shows the HTTP method, the response, etc so its dusplays in the console
// }
// SESSION middlewear:
                                                // needs to be implemented BEFORE the PASSPORT middlewear
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,                              // this just means the we don't want to save a session if nothing is modified
//     saveUninitialized: false,                   // don't create a session until something is stored
//                                                 // via express session middleware, we add in a new Mongo Store, that takes in an object
//     store: MongoStore.create( { mongoUrl: process.env.MONGO_URI } )
//                                                 // this is the old v3 mongo code
//     // store: new MongoStore({ mongooseConnection: mongoose.connection })
// }))  
// SET GLOBAL EXPRESS VARIABLE
                                                // we set it up as express middleware so app.use
                                                // and then pass in a middleware function
                                                // which has access to the request and response obkects, so we can pass logged-in information to the edit story cards
                                                // set a global variable by saying res.locals. with the authentication middleware we have access to req.user which is loggin data
app.use(function (req, res, next) {

    res.locals.user = req.user || null          // set global variable and null if it doesn't exist  
    next()                 
})

// STATIC FOLDER:
app.use(express.static(path.join(__dirname, 'public')) )
// app.use(express.static(path.join(__dirname, 'upload')) )

// ROUTES:
                                                // note how the paths are being set. This can get confusing in the js files in '/routes', watch out!
// app.use('/', require('./routes/index'))
// app.use('/auth', require('./routes/auth'))
// app.use('/stories', require('./routes/stories'))
// app.use('/certgen', require('./routes/certgen'))
// app.use('/scheduler', require('./routes/scheduler'))
// app.use('/archive', require('./routes/archive'))
// app.use('/old', require('./routes/old'))

// simple route
app.get("/app", (req, res) => {
    // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
    res.json({ message: "Welcome to the president's coach's app." });
  });

//                                                 // we previously set our config file to { path: './config/config.env'}
const PORT = process.env.PORT || 5000
app.listen(
    PORT, 
    console.log(`Server running on port ${PORT}`)
    )