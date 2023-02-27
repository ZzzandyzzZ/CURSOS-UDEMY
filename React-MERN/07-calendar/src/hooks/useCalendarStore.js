import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api/calendarApi';
import {
  onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent,
} from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  const disptach = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
  const hasEventSelected = !!activeEvent;

  const setActiveEvent = (calendarEvent) => {
    disptach(onSetActiveEvent(calendarEvent));
  };

  const startDeletingEvent = () => {
    disptach(onDeleteEvent());
  };

  const startSavingEvent = async (calendarEvent) => {
    // Back
    if (calendarEvent.id) {
      disptach(onUpdateEvent({ ...calendarEvent }));
    } else {
      const { data } = await calendarApi.post('/events', calendarEvent);
      disptach(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  return {
    // Props
    activeEvent,
    events,
    hasEventSelected,
    // Methods
    setActiveEvent,
    startDeletingEvent,
    startSavingEvent,
  };
};
