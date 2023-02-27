import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent,
} from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  const disptach = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
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
      disptach(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
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
