export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'add_todo':
      return [
        ...initialState,
        action.payload,
      ]
    case 'remove_todo':
      return initialState.filter(todo=>todo.id != action.payload)
    case 'toggle_todo':
      return initialState.map(todo=>{
          if(todo.id === action.payload) return {...todo, done: !todo.done}
          return todo;
      });
    default:
      break;
  }

}