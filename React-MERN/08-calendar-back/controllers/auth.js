const { response } = require('express');

const bcrypt = require('bcryptjs')

const { User } = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req, res = response) => {
  const { email, name, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      ok: false,
      msg: 'Email ya usado'
    })
  }
  user = new User(req.body);
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);
  try {
    await user.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Comunicarse con el admin',
    });
  }
  const token = await generateJWT(user.id, user.name);
  res.status(201).json({
    ok: true,
    uid: user.id,
    name: user.name,
    token,
  })
}

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      ok: false,
      msg: 'Email no existente'
    })
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(403).json({
      ok: false,
      msg: 'Contraseña incorrecta'
    })
  }
  const token = await generateJWT(user.id, user.name);
  res.json({
    ok: true,
    uid: user.id,
    name: user.name,
    token,
  })
}

const revalidateToken = async (req, res = response) => {
  const { uid, name } = req;
  const token = await generateJWT(uid, name);
  res.json({
    ok: true,
    token,
    uid,
    name,
  })
}

module.exports = { createUser, revalidateToken, loginUser };