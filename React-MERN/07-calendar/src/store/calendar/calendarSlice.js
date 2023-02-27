import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el paste',
  start: new Date(),
  end: addHours(new Date(), 2),
  user: {
    name: 'Andy',
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    a: (state) => {

    },
  },
});

export const { a } = calendarSlice.actions;
