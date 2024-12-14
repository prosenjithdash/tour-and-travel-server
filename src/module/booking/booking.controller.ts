import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { BookingService } from './booking.service'

const createBooking = catchAsync(async (req, res) => {
  const payload = req.body

  const result = await BookingService.createBooking(payload)

  // use utils --> sendResponse.ts file for use hooks/short code
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Booking created successfully.',
    data: result,
  })
})

export const bookingController = {
  createBooking,
}
