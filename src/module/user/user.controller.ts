// req and res manage

import { userService } from './user.service'
import { sendResponse } from '../../utils/sendResponse'

// status code
import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'

const createUser = catchAsync(async (req, res) => {
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
})

const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUser()

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User getting successfully.',
    data: result,
  })
})

const getSingleUser = catchAsync(async (req, res) => {
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
})

const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const body = req.body
  const result = await userService.updateUser(userId, body)

  // use utils --> sendResponse.ts file for use hooks/short code
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User updated successfully.',
    data: result,
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const result = await userService.deleteUser(userId)

  // use utils --> sendResponse.ts file for use hooks/short code
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User deleted successfully.',
    data: result,
  })
})

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
