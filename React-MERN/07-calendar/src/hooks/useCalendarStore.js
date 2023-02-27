import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  const disptach = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    disptach(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // Back
    if (calendarEvent._id) {

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
