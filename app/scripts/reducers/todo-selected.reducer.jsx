export default function SelectedTodoReducer(state=null, action){
  switch (action.type) {
    case 'SELECT_TODO':
      state = action.payload;
      return state;
    case 'UNSELECT_TODO':
      state = null;
      return state;
    default :
      return state;
  }
}
