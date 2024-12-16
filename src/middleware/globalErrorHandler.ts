// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { NextFunction, Request, Response } from 'express'
// import { StatusCodes } from 'http-status-codes'
// import mongoose from 'mongoose'

// //Error:
// // Generic Error
// // 1.Duplicate
// // 2.Validation
// // 3.Cast Error - Type Casting Error
// // 4.Zod Error /joi

// type TErrorResponse = {
//   success: boolean
//   message: string
//   error: any
// }
// export const globalErrorHandler = (
//   error: any,
//   req: Request,
//   res: Response,
//   _next: NextFunction
// ) => {
//   // Cast Error
//   if (error instanceof mongoose.Error.CastError) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ status: false, message: error.message, error: error })
//   } else if (error.code && error.code === 11000) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ status: false, message: 'Duplicate key Error ', error: error })
//   } else if (error instanceof Error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ status: false, message: error.message, error: error })
//   }
// }
// // console.log(error)

// // Error - string = error.message
// // Error - Customize

// /**
//  * JS Code
//  *
//  * error - JS Error -> customize -> new pattern of Error
//  *
//  * any error is a instance of Error class of JS
//  *
//  */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { handleCastError } from '../helpers/handleCastError'
import { handlerDuplicateError } from '../helpers/handleDuplicateError'
import { handleGenericError } from '../helpers/handleGenericError'
import { handleValidationError } from '../helpers/handlerValidationError'
import { handlerZodError } from '../helpers/handleZodError'

//Error:
//Generic Error  - Done
//1.Duplicate - Done
//2. Validation - DOne
//3. Cast Error - Type Casting Error - Done
//4. Zod Error / Joi

type TErrorResponse = {
  success: boolean
  message: string
  error: any
}

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.name && err.name === 'ZodError') {
    handlerZodError(err, res)
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res)
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res)
  } else if (err.code && err.code === 11000) {
    handlerDuplicateError(err, res)
  } else if (err instanceof Error) {
    handleGenericError(err, res)
  }
}

// Error - string = err.message
// Error - Customize - Array, Object, String - JS Error

/**
 * JS COde
 *
 * error - JS Error -> customize -> new pattern of Error
 *
 * any error is a instance of Error Class of JS
 *
 */
