import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({description: ''});
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }
    onNewTodo(newTodo);
    onResetForm();
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input
        name="description"
        type="text"
        className="form-control"
        placeholder="¿Que hay que hacer?"
        value={description}
        onChange={onInputChange}
      />
      <button
        className="btn btn-outline-primary mt-1"
        type="submit"
      >
        Agregar
      </button>
    </form>
  )
}
