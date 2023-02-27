import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  id: new Date().getTime(),
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
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map(
        (event) => {
          if (event.id === payload.id) return payload;
          return event;
        },
      );
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => event.id !== state.activeEvent.id);
        state.activeEvent = null;
      }
    },
  },
});

export const {
  onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent,
} = calendarSlice.actions;
