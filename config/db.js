const mongoose = require('mongoose')

                                        // mongoose deals with promisses, so one must use async
const connectDB = async () => {
    try {
                                        // mongoose.connect returns a promise
        const conn = await mongoose.connect(process.env.MONGO_URI 
        // ** THIS SECTION I FOUND WASN'T NEEDED AND THROWS AN ERROR ** 
        //     {
        //                                 // as a second argument there are options to avoid any warnings in the console
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false 
        // }
        )

        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (err) {
                                        // for if something goes wrong and we can't connect, console error and stop the process
        console.error(err)   
                                        // exit with failure  
        process.exit(1)                          
    }
}
                                        // needed so we can use it in the app.js file:
module.exports = connectDB