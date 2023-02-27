import { useEffect, useMemo, useState } from 'react';

import { differenceInSeconds } from 'date-fns';
import { es } from 'date-fns/locale';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Modal from 'react-modal';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';

registerLocale('es', es);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const initialFormValues = {
  title: '',
  notes: '',
  start: null,
  end: null,
};
export function CalendarModal() {
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const [formSubmited, setFormSubmited] = useState(false);
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const [formValues, setFormValues] = useState(initialFormValues);

  const titleClass = useMemo(() => {
    if (!formSubmited) return '';
    return (formValues.title.length > 0)
      ? 'is-valid'
      : 'is-invalid';
  }, [formValues.title, formSubmited]);

  useEffect(() => {
    if (!activeEvent) return;
    setFormValues({ ...activeEvent });
  }, [activeEvent]);

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmited(true);
    const diff = differenceInSeconds(formValues.end, formValues.start);
    if (Number.isNaN(diff) || diff <= 0) {
      Swal.fire('Fechas incorrectas', 'Registrar fechas registradas', 'error');
      return;
    }
    if (formValues.title.length <= 0) return;
    await startSavingEvent(formValues);
    closeDateModal();
    setFormSubmited(false);
  };

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="start-date">
            Fecha y hora inicio
            <DatePicker
              className="form-control"
              selected={formValues.start}
              onChange={(event) => { onDateChanged(event, 'start'); }}
              dateFormat="Pp"
              showTimeSelect
              locale="es"
              timeCaption="Hora"
            />
          </label>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="end-date">
            Fecha y hora fin
            <DatePicker
              className="form-control"
              selected={formValues.end}
              onChange={(event) => { onDateChanged(event, 'end'); }}
              dateFormat="Pp"
              minDate={formValues.start}
              showTimeSelect
              locale="es"
              timeCaption="Hora"
            />
          </label>
        </div>
        <hr />
        <div className="form-group mb-2">
          <label htmlFor="event-title">
            Titulo y notas
            <input
              type="text"
              className={`form-control ${titleClass}`}
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              value={formValues.title}
              onChange={onInputChanged}
            />
          </label>
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>
        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save" />
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
}
