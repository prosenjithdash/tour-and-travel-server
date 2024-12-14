// Booking interface

import mongoose from 'mongoose'

/*
*. user -id
*. tour - id
*. bookedSlots
*. bookingStatus

 */

/*
 *. bus - dhaka - cox bazer
 *. 30 feet
 *. 1 -> tickets
 *. 30 seat - 4 tickets = 26
 *. 26 + 4 = 30
 *. 30 -4 = 26
 *.
 */

export interface IBooking {
  user: mongoose.Schema.Types.ObjectId
  tour: mongoose.Schema.Types.ObjectId
  bookedSlots: number
  bookingStatus: 'pending' | 'paid' | 'cancelled'
  totalPrice: number
}
