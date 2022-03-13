const { Router } = require('express')
const {
  usersGet,
  usersAdd,
  usersUpadate,
  usersDelete,
} = require('../controllers/users')

const router = Router()

router.get('/', usersGet)

router.post('/', usersAdd)

router.put('/:id', usersUpadate)

router.delete('/', usersDelete)

module.exports = router
