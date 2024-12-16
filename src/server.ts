// import mongoose from 'mongoose'
// import { app } from './app'
// import config from './config'

// async function server() {
//   try {
//     // tour-and-travel
//     // tour-and-travel123123

//     await mongoose.connect(config.database_url as string)
//     // console.log(`mongo sever: ${config.database_url}`)

//     app.listen(config.port, () => {
//       console.log(`Server is running on ${config.port}.`)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// server()

import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port} `)
    })
  } catch (error) {
    console.error(error)
  }
}

server()
