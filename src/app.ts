import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'

export const app = express()

//middleware
app.use(express.json())

app.use('/api/user', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Sever Live',
  })
})
