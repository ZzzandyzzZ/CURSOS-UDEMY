
// host * /api/auth

const { Router } = require('express');

const { check } = require('express-validator');
const { paramsValidator } = require('../middlewares/paramsValidator');

const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El nombre es obligatorio').isEmail(),
    check('password', 'Passord con tamaño menor a 6').isLength({ min: 6 }),
    paramsValidator,
  ],
  createUser
)

router.post(
  '/',
  [
    check('email', 'El nombre es obligatorio').isEmail(),
    check('password', 'Passord con tamaño menor a 6').isLength({ min: 6 }),
    paramsValidator,
  ],
  loginUser
)

router.get(
  '/renew',
  validateJWT,
  revalidateToken,
)

module.exports = router;