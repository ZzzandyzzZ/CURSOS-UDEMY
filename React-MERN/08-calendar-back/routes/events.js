/*
  Events Routes
  /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { paramsValidator } = require('../middlewares/paramsValidator');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.use(validateJWT);


router.get('/', getEvents);

router.post(
  '/',
  [
    check('title', 'el titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio obligatoria').custom(isDate),
    check('end', 'Fecha de fin obligatoria').custom(isDate),
    paramsValidator,
  ],
  createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);


module.exports = router;