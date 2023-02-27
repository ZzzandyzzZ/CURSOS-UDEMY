const { Schema, model } = require('mongoose');


const EventSchema = Schema({
  title: {
    type: String,
    require: true,
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
  },
});

module.exports = {
  Event: model('User', EventSchema),
}