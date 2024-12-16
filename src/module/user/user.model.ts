// import { model, Schema } from 'mongoose'
// import { IUser } from './user.interface'

// const userSchema = new Schema<IUser>({
//   name: {
//     type: String,
//     required: [true, 'Please enter your name'],
//     minlength: 3,
//     maxlength: 50,
//   },
//   age: {
//     type: Number,
//     required: [true, 'Please enter your age'],
//   },
//   email: {
//     type: String,
//     required: [true, 'Please enter your email'],
//     unique: true,
//     validate: {
//       validator: function (value) {
//         return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
//       },
//       message: '{VALUE} is not a valid email',
//     },
//     immutable: true,
//   },
//   photo: String,
//   role: {
//     type: String,
//     required: [true, 'Please enter your role'],
//     enum: {
//       values: ['admin', 'user'],
//       message: '{VALUE} is a not valid, Please provide a valid role',
//     },
//     default: 'user',
//     required: true,
//   },
//   userStatus: {
//     type: String,
//     required: [true, 'Please enter your Status'],
//     enum: ['active', 'block'],
//     default: 'active',
//   },
// })

// // hook -> pre hook
// // userSchema.pre("find", function (this, next) {
// //   this.find({ userStatus: { $ne: 'active' } })
// //   next()
// // })

// // hook -> post hook
// // userSchema.post('find', function (docs, next) {
// //   docs.forEach((doc: IUser) => {
// //     doc.name = doc.name.toUpperCase()
// //   })
// //   next()
// // })

// // creating model
// export const User = model<IUser>('User', userSchema)

import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
/**
 * "stringValue": "\"create-user\"",
        "valueType": "string",
        "kind": "ObjectId",
        "value": "create-user",
        "path": "_id",
        "reason": {},
        "name": "CastError",
        "message": "Cast to ObjectId failed for value \"create-user\" (type string) at path \"_id\" for model \"User\""
    }
 */
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minlength: 3,
    maxlength: 50,
  },
  age: { type: Number, required: [true, 'Please enter your age'] },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
    immutable: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} is not valid, please provide a valid role',
    },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
    default: 'active',
  },
})

// hook -> pre
// userSchema.pre('find', function (this, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

// userSchema.post('find', function (docs, next) {
//   docs.forEach((doc: IUser) => {
//     doc.name = doc.name.toUpperCase()
//   })
//   next()
// })

const User = model<IUser>('User', userSchema)
export default User
