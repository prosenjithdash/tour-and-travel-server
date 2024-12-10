import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'
import tourRouter from './module/tour/tour.router'

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
