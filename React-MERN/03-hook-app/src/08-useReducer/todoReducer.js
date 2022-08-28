export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'add_todo':
      return [
        ...initialState,
        action.payload,
      ]
    case 'remove_todo':
      return initialState.filter(todo=>todo.id != action.payload)
    default:
      break;
  }

}