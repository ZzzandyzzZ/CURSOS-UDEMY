import { useEffect, useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent } from '../components/CalendarEvent';
import { CalendarModal } from '../components/CalendarModal';
import { getMessagesES } from '../../helpers/getMessages';
import { localizer } from '../../helpers/calendarLocalizer';
import { Navbar } from '../components/Navbar';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore';
import { FabAddNew } from '../components/FabAddNew';
import { FabDelete } from '../components/FabDelete';
import { useAuthStore } from '../../auth/hooks/useAuthStore';

export function CalendarPage() {
  const { openDateModal } = useUiStore();
  const { user } = useAuthStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

  useEffect(() => {
    startLoadingEvents();
  }, []);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = (user.uid == event.user._id) || (user.uid === event.user.uid);
    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };
    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
}
