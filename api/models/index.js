const mongoose = require('mongoose');
const config = require('config');
const db = 'mongodb://localhost:27017';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI || db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log('db connected!!')
    } catch (err) {
        console.log(err.message)

        process.exit(1)
    }
}

module.exports = {
    connectDB: connectDB
}