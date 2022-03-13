const { response } = require('express')

const usersGet = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Get Api - Controller',
  })
}

const usersAdd = (req, res = response) => {
  const body = req.body

  res.json({
    ok: true,
    msg: 'Post Api - Controller',
    body,
  })
}

const usersUpadate = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Put Api - Controller',
  })
}

const usersDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Delete Api - Controller',
  })
}

module.exports = {
  usersGet,
  usersAdd,
  usersUpadate,
  usersDelete,
}
