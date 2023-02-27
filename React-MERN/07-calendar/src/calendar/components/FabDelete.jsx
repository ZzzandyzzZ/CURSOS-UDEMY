import { useCalendarStore } from '../../hooks/useCalendarStore';

export function FabDelete() {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleButtonClick = () => {
    startDeletingEvent();
  };

  return hasEventSelected && (
    <button
      className="btn btn-danger fab-danger"
      type="button"
      onClick={handleButtonClick}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
}
