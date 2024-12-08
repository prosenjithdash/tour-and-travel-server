import { model, Schema } from 'mongoose'
import Enum from 'enum'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: 3,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: [true, 'Please enter your age'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
    immutable: true,
  },
  photo: String,
  role: {
    type: String,
    required: [true, 'Please enter your role'],
    enum: {
      values: ['admin', 'user'],
      message: '{VALUE} is a not valid, Please provide a valid role',
    },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    required: [true, 'Please enter your Status'],
    enum: ['active', 'block'],
    default: 'active',
  },
})

// hook -> pre hook
userSchema.pre("find", function (this, next) {
  
})

// creating model
export const User = model<IUser>('User', userSchema)
