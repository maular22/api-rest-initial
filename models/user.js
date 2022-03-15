const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
  mail: {
    type: String,
    required: [true, 'The mail is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'The paswword is required'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    emun: ['ADMIN', 'USER'],
  },

  status: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
  apple: {
    type: Boolean,
    default: false,
  },
  facebook: {
    type: Boolean,
    default: false,
  },
})

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject()
  return user
}

module.exports = model('user', UserSchema)
