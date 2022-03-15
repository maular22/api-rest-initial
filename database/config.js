require('dotenv').config()
const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connect a DB')
  } catch (error) {
    console.log(error)
    throw new Error('Error Intial Data Base')
  }
}

module.exports = {
  dbConnection,
}
