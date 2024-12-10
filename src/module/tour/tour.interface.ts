import { HydratedDocument, Model } from 'mongoose'

export interface ITour {
  name: string
  durationHours: number
  averageRating: number
  price: number
  coverImage: string
  images: string[]
  startDates: Date[]
  startLocation: string
  location: string[]
  slug: string
}

// use for instance method
// export interface ITourMethods {
//   getNextNearestStartDateAndEndDate(): {
//     nearestStartDate: Date | null
//     estimatedEndDate: Date | null
//   }
// }

// use for static
export interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null
    estimatedEndDate: Date | null
  }
}

//  interface UserModel extends Model<IUser, {}, IUserMethods> {
//   createWithFullName(name: string): Promise<HydratedDocument<IUser, IUserMethods>>;
// }

export interface TTourModel
  extends Model<ITour, Record<string, unknown>, ITourMethods> {
  startDates: Date[]
  durationHours: number
  getNextNearestStartDateAndEndDate(): Promise<
    HydratedDocument<ITour, ITourMethods>
  >
}
