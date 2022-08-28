import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)
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
  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }
};