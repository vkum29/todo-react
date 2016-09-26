import React from 'react';
import '../../../../styles/todo.css';

import TodoStore from '../../../stores/todo.store.jsx';

export default class TodoDetails extends React.Component{
    constructor(){
        super();
        this.state = {
          items: TodoStore.getAllTodos()
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
