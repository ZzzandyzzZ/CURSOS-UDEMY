import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  const disptach = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    disptach(onSetActiveEvent(calendarEvent));
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
    events,
    activeEvent,
    // Methods
    setActiveEvent,
    startSavingEvent,
  };
};
