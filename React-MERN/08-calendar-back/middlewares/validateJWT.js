const { response } = require('express');
const jwt = require('jsonwebtoken');

const { SECRET_JWT_SEED } = process.env

const validateJWT = (req, res = response, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token",
    })
  }
  try {
    const { uid, name } = jwt.verify(token, SECRET_JWT_SEED);
    req.uid = uid;
    req.name = name;
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      ok: false,
      msg: 'Token incorrecto'
    })
  }
  next();
}

module.exports = {
  validateJWT,
}