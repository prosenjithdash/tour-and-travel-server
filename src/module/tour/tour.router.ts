import { Router } from 'express'
import { tourController } from './tour.controller'

const tourRouter = Router()

//
tourRouter.get('/schedule/:userId', tourController.getNextSchedule)
// get single tour
tourRouter.get('/:userId', tourController.getSingleTour)
// get all tour
tourRouter.get('/', tourController.getTours)
// create tour
tourRouter.post('/', tourController.createTour)
// update single tour
tourRouter.put('/:userId', tourController.updateTour)
// delete single tour
tourRouter.delete('/:userId', tourController.deleteTour)

 
export default tourRouter
