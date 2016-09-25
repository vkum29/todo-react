import {combineReducers} from 'redux';

import todos from './todos.reducer.jsx';
import selectedTodo from './todo-selected.reducer.jsx';
import filter from './todo-filter.reducer.jsx';
import addNewTodo from './todo-new.reducer.jsx';

const TodoReducer = combineReducers({
  todos,
  selectedTodo,
  filter,
  addNewTodo
});

export default TodoReducer;
