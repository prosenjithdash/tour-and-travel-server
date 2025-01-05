import { StatusCodes } from 'http-status-codes'
import { sendResponse } from '../../utils/sendResponse'
import { BookingService } from './booking.service'
import { catchAsync } from '../../utils/catchAsync'

// const createBooking = catchAsync(async (req, res) => {
//   const payload = req.body

//   const result = await BookingService.createBooking(payload)

//   // use utils --> sendResponse.ts file for use hooks/short code
//   sendResponse(res, {
//     statusCode: StatusCodes.CREATED,
//     message: 'Booking created successfully.',
//     data: result,
//   })
// })

// export const bookingController = {
//   createBooking,
// }

const createBooking = catchAsync(async (req, res) => {
  const body = req.body
  const result = await BookingService.createBooking(body)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Booking created successfully',
    data: result,
  })
})

export const bookingController = {
  createBooking,
}
