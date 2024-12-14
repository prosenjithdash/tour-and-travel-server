import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

//........
//User do not creating
//........

// create user
userRouter.post('/create-user', userController.createUser)
// get all user
userRouter.get('/', userController.getUser)
// get single user
userRouter.get('/:userId', userController.getSingleUser)
// update single user
userRouter.put('/:userId', userController.updateUser)
// delete single user
userRouter.delete('/:userId', userController.deleteUser)

export default userRouter
