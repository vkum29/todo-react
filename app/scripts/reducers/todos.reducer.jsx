import MockTodoData from "../../mocks/todos.jsx";

export default function TodosReducer(state= MockTodoData, action){
  switch (action.type) {
    case 'CREATE_TODO':
      state = state.concat(action.payload);
      return state;
    case 'DELETE_TODO':
      state = state.filter(todo => todo.id !== action.payload );
      return state;
    case 'COMPLETE_TODO':
      state = [].concat(state)
      state.forEach(todo => {
        if (todo.id === action.payload) {
          todo.complete = true;
        }
      });
      return state;
    case 'FILTER_TODO':
      state = state.filter(todo => todo.title.toLowerCase().indexOf(action.payload) !== -1);
      return state;
    default :
      return state;
  }
}
