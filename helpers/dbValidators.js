const Role = require('../models/role')
const User = require('../models/user')

const isRoleValid = async (role = '') => {
  const roleExist = await Role.findOne({ role })
  if (!roleExist) {
    throw new Error(`the role ${role} no exits en DB`)
  }
}

const emailExists = async (mail = '') => {
  const mailExists = await User.findOne({ mail })

  if (mailExists) {
    throw new Error(`the email: ${mail} exits en DB`)
  }
}

const userExistsId = async (id) => {
  const idExists = await User.findById(id)

  if (!idExists) {
    throw new Error(`the user id: ${id} not exits en DB`)
  }
}
module.exports = {
  isRoleValid,
  emailExists,
  userExistsId,
}
