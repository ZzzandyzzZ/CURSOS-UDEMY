import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';

import { Navbar } from '../components/Navbar';
import { localizer } from '../../helpers/calendarLocalizer';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesES } from '../../helpers/getMessages';

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el paste',
  start: new Date(),
  end: addHours(new Date(), 2),
}];

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

export function CalendarPage() {
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
}
