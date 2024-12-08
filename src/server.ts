import mongoose from 'mongoose'
import { app } from './app'
import config from './config'

async function server() {
  try {
    // tour-and-travel
    // tour-and-travel123123

    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`Server is running on ${config.port}.`)
    })
  } catch (error) {
    console.log(error)
  }
}

server()
