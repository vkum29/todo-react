export default function NewTodoReducer(state=false, action){
  switch (action.type) {
    case 'SHOW_ADD_NEW_TODO':
      state = true;
      return state;
    case 'CREATE_TODO':
    case 'HIDE_ADD_NEW_TODO':
      state = false;
      return state;
    default :
      return state;
  }
}
