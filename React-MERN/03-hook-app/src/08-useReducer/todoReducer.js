export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'Add_Todo':
      return [
        ...initialState,
        action.payload,
      ]
    default:
      break;
  }

}