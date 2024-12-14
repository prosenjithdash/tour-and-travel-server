import express, { NextFunction, Request, Response } from 'express'
import userRouter from './module/user/user.router'
import tourRouter from './module/tour/tour.router'
import { StatusCodes } from 'http-status-codes'
import { bookingRouter } from './module/booking/booking.router'

export const app = express()

//middleware
app.use(express.json())

// User
app.use('/api/user', userRouter)

// Tour
app.use('/api/tour', tourRouter)

// Booking
app.use('/api/booking', bookingRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Sever Live',
  })
})

// error handling middleware
app.use((error: any, req: Request, res: Response, _next: NextFunction) => {
  console.log(error)
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ status: false, message: error.message, error: error })
})
