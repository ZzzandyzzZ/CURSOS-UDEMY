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

EventSchema.method('toJSON', function (){
  const {__v, _id, ...object} = this.toObject();
  object.id = _id;
  return object;
})

module.exports = {
  Event: model('Event', EventSchema),
}