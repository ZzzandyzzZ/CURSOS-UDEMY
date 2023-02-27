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
const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'updateEvent'
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