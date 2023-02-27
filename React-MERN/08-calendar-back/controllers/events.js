const { response } = require('express');
const { Event } = require('../models/Event');

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'get events'
  });
}
const createEvent = async (req, res = response) => {
  const event = new Event(req.body);
  const eventSaved = await event.save()
  res.json({
    ok: true,
    eventSaved,
  });
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