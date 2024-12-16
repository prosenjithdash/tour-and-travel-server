// import { Router } from 'express'
// import { userController } from './user.controller'

// const userRouter = Router()

// //........
// //User do not creating
// //........

// // create user
// userRouter.post('/create-user', userController.createUser)
// // get all user
// userRouter.get('/', userController.getUser)
// // get single user
// userRouter.get('/:userId', userController.getSingleUser)
// // update single user
// userRouter.put('/:userId', userController.updateUser)
// // delete single user
// userRouter.delete('/:userId', userController.deleteUser)

// export default userRouter

import { NextFunction, Request, Response, Router } from 'express'
import { userController } from './user.controller'
import { UserValidation } from './userValidation'

const userRouter = Router()

userRouter.post(
  '/create-user',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log({ body: req.body })
      const parsedBody = await UserValidation.userValidationSchema.parseAsync(
        req.body
      )
      req.body = parsedBody
      console.log({ parsedBody })
      next()
    } catch (error) {
      next(error)
    }
  },
  userController.createUser
)
userRouter.get('/:userId', userController.getSingleUser)
userRouter.put('/:userId', userController.updateUser)
userRouter.delete('/:userId', userController.deleteUser)
userRouter.get('/', userController.getUser)

export default userRouter
