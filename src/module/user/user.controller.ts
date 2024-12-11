// req and res manage

import { NextFunction, Request, Response } from 'express'
import { userService } from './user.service'
import { sendResponse } from '../../utils/sendResponse'

// status code
import { StatusCodes } from 'http-status-codes'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body

    const result = await userService.createUser(payload)

    // res.json({
    //   status: false,
    //   message: 'User created Successfully.',
    //   data: result,
    // })

    // use utils --> sendResponse.ts file for use hooks/short code
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User created successfully.',
      data: result,
    })
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: 'Something went wrong',
    //   error,
    // })

    // USE Next function
    next(error)
    console.log(error)
  }
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getUser()
    // res.json({
    //   status: true,
    //   message: 'User getting Successfully.',
    //   result,
    // })
    // use utils --> sendResponse.ts file for use hooks/short code
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User getting successfully.',
      data: result,
    })
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: 'Something went wrong',
    //   error,
    // })

    // USE Next function
    next(error)
    console.log(error)
  }
}

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    const result = await userService.getSingleUser(userId)
    // res.json({
    //   status: true,
    //   message: 'User getting Successfully.',
    //   result,
    // })
    // use utils --> sendResponse.ts file for use hooks/short code
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User getting successfully.',
      data: result,
    })
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: 'Something went wrong',
    //   error,
    // })

    // USE Next function
    next(error)
    console.log(error)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId
    const body = req.body
    const result = await userService.updateUser(userId, body)

    // use utils --> sendResponse.ts file for use hooks/short code
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User updated successfully.',
      data: result,
    })
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: 'Something went wrong',
    //   error,
    // })

    // USE Next function
    next(error)
    console.log(error)
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId
    const result = await userService.deleteUser(userId)

    // use utils --> sendResponse.ts file for use hooks/short code
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User deleted successfully.',
      data: result,
    })
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: 'Something went wrong',
    //   error,
    // })

    // USE Next function
    next(error)
    console.log(error)
  }
}

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
