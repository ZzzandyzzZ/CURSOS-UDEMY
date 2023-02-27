import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';

import { Navbar } from '../components/Navbar';
import { localizer } from '../../helpers/calendarLocalizer';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesES } from '../../helpers/getMessages';
import { CalendarEvent } from '../components/CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks/useUiStore';

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el paste',
  start: new Date(),
  end: addHours(new Date(), 2),
  user: {
    name: 'Andy',
  },
}];

export function CalendarPage() {
  const { openDateModal } = useUiStore();
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
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
    </>
  );
}
