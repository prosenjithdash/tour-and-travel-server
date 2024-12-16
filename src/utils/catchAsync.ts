// higer order function
// function createOperation(func: (a: number, b: number) => number) {
//   return func
// }
// const add = createOperation((a, b) => a + b)
// console.log(add(3, 5))

import { NextFunction, Request, Response } from 'express'
import { RequestHandler } from 'express-serve-static-core'
export const catchAsync = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((error) => next(error))
  }
}

// catchAsync(async (req, res) => {

//     const result = await userService.getUser()

//     sendResponse(res, {
//       statusCode: StatusCodes.OK,
//       message: 'User getting successfully.',
//       data: result,
//     })
//  catch (error) {
//     // USE Next function
//     next(error)
//   }
// })
