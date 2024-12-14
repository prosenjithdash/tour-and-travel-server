// create booking
// get all booking
// get booking by id
// get booking by user id = myBookings
// update booking
// delete booking = soft.delete

import express, { Request, Response } from 'express'
import { bookingController } from './booking.controller'
export const bookingRouter = express.Router()

bookingRouter.post('/create-booking', bookingController.createBooking)
