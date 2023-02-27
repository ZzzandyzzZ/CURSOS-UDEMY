/*
  Events Routes
  /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { paramsValidator } = require('../middlewares/paramsValidator');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.use(validateJWT);

router.get(
  '/',
  [
    check('title', 'el titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio obligatoria').custom(),
    paramsValidator,
  ],
  getEvents
);

router.post('/', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);


module.exports = router;