// import express, { Request, Response } from 'express'
// import userRouter from './module/user/user.router'
// import tourRouter from './module/tour/tour.router'
// import { bookingRouter } from './module/booking/booking.router'
// import { globalErrorHandler } from './middleware/globalErrorHandler'

// export const app = express()

// //middleware
// app.use(express.json())

// // User
// app.use('/api/user', userRouter)

// // Tour
// app.use('/api/tour', tourRouter)

// // Booking
// app.use('/api/booking', bookingRouter)

// app.get('/', (req: Request, res: Response) => {
//   res.send({
//     status: true,
//     message: 'Sever Live',
//   })
// })

// // error handling middleware
// app.use(globalErrorHandler)

// app.use('*', (req: Request, res: Response) => {
//   res.status(404).json({
//     status: false,
//     message: 'Route not found',
//   })
// })

// // req, res -> jwt function next() > function
// // express -> workflow =
// // train -> [router]-[controller - error]-[service - error]-[errorHandler]->

import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'
import tourRouter from './module/tour/tour.router'
import bookingRouter from './module/booking/booking.router'
import { globalErrorHandler } from './middleware/globalErrorHandler'

const app = express()

// middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)
app.use('/api/booking', bookingRouter)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

app.use(globalErrorHandler)

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  })
})

export default app

// req, res > jwt funtion next() > function
// express -> workflow =
// train -> [router]-[controller -error]-[service - error]-[errorHandler]->
