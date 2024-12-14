// transection loader
import mongoose from 'mongoose'
import { Tour } from '../tour/tour.model'
import { IBooking } from './booking.interface'
import { Booking } from './booking.model'

const createBooking = async (payload: IBooking): Promise<IBooking> => {
  // const { tour, bookedSlots } = payload

  // const requiredTour = await Tour.findById(tour)
  // if (!requiredTour) {
  //   throw new Error('Tour not found')
  // }
  // const totalPrice = requiredTour.price * bookedSlots
  // payload.totalPrice = totalPrice
  // payload.bookingStatus = 'pending'

  // if (requiredTour.availableSeats < bookedSlots) {
  //   throw new Error('Not enough seats available')
  // }
  // const booking = await Booking.create(payload)
  // // throw new Error('Failed to create.')

  // const updatedTour = await Tour.findByIdAndUpdate(
  //   tour,
  //   { $inc: { availableSeats: -bookedSlots } },
  //   { new: true }
  // )
  // if (!updatedTour) {
  //   throw new Error('Failed to update tour.')
  // }
  // return booking

  // use to Transaction
  // clone database
  // sandbox - text database
  // database - error
  // database - delete
  // database - success
  // database - marge

  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    const { tour, bookedSlots } = payload

    const requiredTour = await Tour.findById(tour)
    if (!requiredTour) {
      throw new Error('Tour not found')
    }
    const totalPrice = requiredTour.price * bookedSlots
    payload.totalPrice = totalPrice
    payload.bookingStatus = 'pending'

    if (requiredTour.availableSeats < bookedSlots) {
      throw new Error('Not enough seats available')
    }
    const booking = await Booking.create([payload], { session })
    // throw new Error('Failed to create.')

    const updatedTour = await Tour.findByIdAndUpdate(
      booking[0],
      { $inc: { availableSeats: -bookedSlots } },
      { new: true }
    )
    if (!updatedTour) {
      throw new Error('Failed to update tour.')
    }
    await session.commitTransaction()
    await session.endSession()

    return booking[0]
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}

// update booking
/**
 * Booking update
 * Booking cancel  - Booking Model
 * Tour AvailablesSeats =   availablesSeatsf + Bookedslot  - Tour Model
 */

export const BookingService = {
  createBooking,
}