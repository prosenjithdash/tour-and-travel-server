// req and res manage

import { Request, Response } from 'express'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body

    const result = await userService.createUser(payload)

    res.json({
      status: false,
      message: 'User created Successfully.',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
    console.log(error)
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser()
    res.json({
      status: true,
      message: 'User getting Successfully.',
      result,
    })

    res.json({
      status: false,
      message: 'User created Successfully.',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
    console.log(error)
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await userService.getSingleUser(userId)
    res.json({
      status: true,
      message: 'User getting Successfully.',
      result,
    })

    res.json({
      status: false,
      message: 'User created Successfully.',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
    console.log(error)
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const body = req.body
    const result = await userService.updateUser(userId, body)

    res.json({
      status: true,
      message: 'User updated Successfully.',
      result,
    })

    res.json({
      status: false,
      message: 'User created Successfully.',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
    console.log(error)
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await userService.deleteUser(userId)
    res.json({
      status: true,
      message: 'User deleted Successfully.',
      result: {},
    })

    res.json({
      status: false,
      message: 'User created Successfully.',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
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
