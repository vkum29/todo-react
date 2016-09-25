export default function FilterTodoReducer(state='', action){
  switch (action.type) {
    case 'FILTER_TODO':
      state = action.payload;
      return state;
    case 'CLEAR_FILTER_TODO':
    case 'SHOW_ADD_NEW_TODO':
      state = '';
      return state;
    default :
      return state;
  }
}
