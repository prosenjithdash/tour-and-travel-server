import { tourService } from './tour.service'
import { Request, Response } from 'express'

const createTour = async (req: Request, res: Response) => {
  try {
    const payload = req.body

    const result = await tourService.createTour(payload)

    res.json({
      status: false,
      message: 'Tour created Successfully.',
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

const getTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours()
    res.json({
      status: true,
      message: 'Tour getting Successfully.',
      result,
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

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await tourService.getSingleTour(userId)
    res.json({
      status: true,
      message: 'Singe Tour getting Successfully.',
      result,
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

const updateTour = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const body = req.body
    const result = await tourService.updateTour(userId, body)

    res.json({
      status: true,
      message: 'Tour updated Successfully.',
      result,
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

const deleteTour = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await tourService.deleteTour(userId)

    res.json({
      status: false,
      message: 'User deleted Successfully.',
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
export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
}
