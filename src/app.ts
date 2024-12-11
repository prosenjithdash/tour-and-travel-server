import express, { NextFunction, Request, Response } from 'express'
import userRouter from './module/user/user.router'
import tourRouter from './module/tour/tour.router'
import { StatusCodes } from 'http-status-codes'

export const app = express()

//middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Sever Live',
  })
})
app.use((error: any, req: Request, res: Response, _next: NextFunction) => {
  console.log(error)
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ status: false, message: error.message, error: error })
})
