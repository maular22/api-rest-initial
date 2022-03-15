const { Router } = require('express')
const { check } = require('express-validator')

const { fieldsValidator } = require('../middlewares/validFields')
const {
  isRoleValid,
  emailExists,
  userExistsId,
} = require('../helpers/dbValidators')
const {
  usersGet,
  usersAdd,
  usersUpadate,
  usersDelete,
} = require('../controllers/users')

const router = Router()

router.get('/', usersGet)

router.post(
  '/',
  [
    check('name', 'The name is requeried').not().isEmpty(),
    check('password', 'The password is requeried and length > 6 ').isLength({
      min: 6,
    }),
    check('mail', 'The mail no valid').isEmail(),

    check('mail').custom(emailExists),

    check('role').custom(isRoleValid),

    fieldsValidator,
  ],
  usersAdd,
)

router.put(
  '/:id',
  [
    check('id', 'Not Id Valid').isMongoId(),
    check('id').custom(userExistsId),
    check('role').custom(isRoleValid),
    fieldsValidator,
  ],
  usersUpadate,
)

router.delete(
  '/:id',
  [
    check('id', 'Not Id Valid').isMongoId(),
    check('id').custom(userExistsId),
    fieldsValidator,
  ],
  usersDelete,
)

module.exports = router
