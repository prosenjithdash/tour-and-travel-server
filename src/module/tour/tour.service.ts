import { ITour } from './tour.interface'
import { Tour } from './tour.model'

const createTour = async (payload: ITour) => {
  const result = await Tour.create(payload)
  return result
}

const getTours = async () => {
  const result = Tour.find()
  return result
}

const getSingleTour = async (id: string) => {
  const result = Tour.findById(id)
  return result
}

const updateTour = async (id: string, payload: Partial<ITour>) => {
  const result = Tour.findByIdAndUpdate(id, payload)
  return result
}

const deleteTour = async (id: string) => {
  const result = Tour.findByIdAndDelete(id)
  return result
}

// // use for instance methods
// const getNextSchedule = async (id: string) => {
//   const tour = await Tour.findById(id)
//   const nextSchedule = tour?.getNextNearestStartDateAndEndDate()
//   return {
//     tour,
//     nextSchedule,
//   }
// }

// use for static
const getNextSchedule = async (id: string) => {
  const tour = await Tour.getNextNearestStartDateAndEndDate()
  return {
    tour,
  }
}

export const tourService = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
