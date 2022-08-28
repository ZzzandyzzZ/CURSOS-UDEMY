import { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Sacar basura',
  //   done: false,
  // },
  // {
  //   id: new Date().getTime()*3,
  //   description: 'Lavar platos',
  //   done: false,
  // }
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: 'add_todo',
      payload: todo,
    }
    dispatch(action);
  }
  const handleRemoveTodo = (id) => {
    const action = {
      type: 'remove_todo',
      payload: id,
    }
    dispatch(action);
  }
  const handleToggleTodo = (id) => {
    dispatch({
      type: 'toggle_todo',
      payload: id,
    });
  }
  return (
    <>
      <h1>TodoApp: 10,<small>Pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
