import { model, Schema } from 'mongoose'
import { ITour, ITourMethods, TTourModel } from './tour.interface'

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>({
  name: {
    type: String,
    required: true,
  },
  durationHours: {
    type: Number,
    required: true,
  },
  averageRating: {
    type: Number,
    requred: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  images: [String],
  startDates: [Date],
  startLocation: [String],
  location: [String],
  slug: String,
})

// find which tour date is near of running tour date
// user instance methods
// tourSchema.methods.getNextNearestStartDateAndEndDate = function () {
// const today = new Date()
// const futureDates = this.startDates.filter((startDate: Date) => {
//   return startDate > today
// })
// futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
// const nearestStartDate = futureDates[0]
// const estimatedEndDate = new Date(
//   nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
// )

// return {
//   nearestStartDate,
//   estimatedEndDate,
// }
// }

// use static
tourSchema.static(
  'getNextNearestStartDateAndEndDate',
  function getNextNearestStartDateAndEndDate() {
    const today = new Date()
    const futureDates = this.startDates.filter((startDate: Date) => {
      return startDate > today
    })
    futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
    const nearestStartDate = futureDates[0]
    const estimatedEndDate = new Date(
      nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
    )

    return {
      nearestStartDate,
      estimatedEndDate,
    }
  }
)

// creating model
// export const Tour = model<IUser>('Tour', tourSchema)
export const Tour = model<ITour, TTourModel>('Tour', tourSchema)
