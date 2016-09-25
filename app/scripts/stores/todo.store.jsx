import {createStore} from 'redux';

import reducer from '../reducers/app.reducer.jsx';

var TodoStore = createStore(reducer);

export default TodoStore;
