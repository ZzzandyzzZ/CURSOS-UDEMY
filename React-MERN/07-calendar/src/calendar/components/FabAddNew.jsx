import { addHours } from 'date-fns';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore';

export function FabAddNew() {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleButtonClick = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      user: {
        name: 'Andy',
      },
    });
    openDateModal();
  };

  return (
    <button
      className="btn btn-primary fab"
      type="button"
      onClick={handleButtonClick}
    >
      <i className="fas fa-plus" />
    </button>
  );
}
