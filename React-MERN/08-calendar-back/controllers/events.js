const { response } = require('express');
const { Event } = require('../models/Event');

const getEvents = async (req, res = response) => {
  const events = await Event.find()
                            .populate('user', 'name');
  res.json({
    ok: true,
    events,
  });
}
const createEvent = async (req, res = response) => {
  const event = new Event(req.body);
  event.user = req.uid;
  try {
    const eventSaved = await event.save()
    res.json({
      ok: true,
      eventSaved,
    });
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      msg: 'Hubo un error :(',
    })
  }
}
const updateEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const { uid } = req;
  const event = await Event.findById(eventId);
  if (!event) {
    return res.status(400).json({
      ok: false,
      msg: 'Evento no encontrado',
    })
  }
  if (event.user.toString() !== uid) {
    return res.status(401).json({
      ok: false,
      msg: 'No autorizado',
    });
  }
  const newEvent = {
    ...req.body,
    user: uid,
  }
  const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new:true});
  res.json({
    ok: true,
    updatedEvent,
  });
}

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteEvent'
  });
}


module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
}