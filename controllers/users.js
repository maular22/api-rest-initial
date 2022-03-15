const { response } = require('express')
const bcryptjs = require('bcryptjs')

const User = require('../models/user')
const { all } = require('../routes/users')
const { query } = require('express')

const usersGet = async (req, res = response) => {
  const { limit = 5, offset = 0 } = req.query
  const query = { status: true }

  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(offset)).limit(Number(limit)),
  ])

  res.json({
    ok: true,
    total,
    users,
  })
}

const usersAdd = async (req, res = response) => {
  const { name, mail, password, role } = req.body
  const user = new User({ name, mail, password, role })

  /// encriptar cnotraseña
  const salt = bcryptjs.genSaltSync()

  user.password = bcryptjs.hashSync(password, salt)

  /// Guardar resgitro
  await user.save()

  res.json({
    ok: true,
    msg: 'Post Api - Controller',
    user,
  })
}

const usersUpadate = async (req, res = response) => {
  const { id } = req.params

  const { _id, password, google, facebook, apple, mail, ...userM } = req.body

  /// Validar contra base de datos

  if (password) {
    const salt = bcryptjs.genSaltSync()

    userM.password = bcryptjs.hashSync(password, salt)
  }

  const user = await User.findByIdAndUpdate(id, userM, { new: true })
  res.json({
    ok: true,
    msg: 'Put Api - Controller',
    user,
  })
}

const usersDelete = async (req, res = response) => {
  const { id } = req.params

  const user = await User.findByIdAndUpdate(id, { status: false })

  res.json({
    ok: true,
    msg: 'User delete',
    user,
  })
}

module.exports = {
  usersGet,
  usersAdd,
  usersUpadate,
  usersDelete,
}
