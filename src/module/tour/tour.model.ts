import { model, Schema } from "mongoose"

const tourSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    durationHours: {
        type: Number,
        required:true,
    },
    averageRating: {
        type: Number,
        requred:5
    },
    price: {
        type: Number,
        required: true,
    },
    coverImage: {
        type: String,
        required:true
    },
    images:[String],
    startDate:{type:Date},
    startLocation: [String],
    location: [String],
    slug:String,
    
})

// creating model
// export const Tour = model<IUser>('Tour', tourSchema)
export const Tour = model('Tour', tourSchema)
