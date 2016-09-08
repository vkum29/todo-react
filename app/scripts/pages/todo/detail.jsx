import React from 'react';
import '../../../styles/todo.css';

import Search from './search.jsx';
import ListTodos from '../../common/lists.jsx';
import Action from '../../common/action.jsx';
import AddTodo from './addtodo.jsx';

import MockTodoData from '../../../mocks/todos.jsx';

export default class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
          items : MockTodoData
        }
    }

    render() {
        let items = Object.assign([],this.state.items);
        let item = items.filter((item, i) => {
          return item.id == this.props.params.id;
        });
      
        let todo = item[0];
      
        return (
            <section className='content'>
              <h2>{todo.title}</h2>
              <p>{todo.desc}</p>
            </section>
        );
    }
}
