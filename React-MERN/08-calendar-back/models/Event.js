const { Schema, model } = require('mongoose');


const EventSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = {
  Event: model('Event', EventSchema),
}