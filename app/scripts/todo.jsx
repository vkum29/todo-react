import React from 'react';
import '../styles/todo.css';

import Search from './search.jsx';
import ListTodos from './common/lists.jsx';
import Action from './common/action.jsx';
import AddTodo from './addtodo.jsx';

import MockTodoData from '../mocks/todos.jsx';

export default class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
          addTodo : false,
          items : MockTodoData,
          originalItemList: MockTodoData
        }
    }

    filterResults(query) {
        let items = this.state.originalItemList;
        if(query){
            items = items.filter((item, i) => {
              return item.text.includes(query);
            });
        }
        this.setState({
            items
        });
    }

    addTodo(todo) {
      let items = this.state.originalItemList;
      if(todo){
        items.push(todo);
      }
      this.setState({
          addTodo: false,
          items,
          originalItemsList: items
      });
    }

    showAddTodoForm() {
      this.setState({
        addTodo: true
      })
    }

    render() {
        let addTodoClass = [<AddTodo key="1" action={this.addTodo.bind(this)}/>];
        let ListTodoClass = [
          <Search key="1"  filterItems={this.filterResults.bind(this)}/>,
          <ListTodos key="2" items={this.state.items}/>,
          <Action key="3" action={this.showAddTodoForm.bind(this)} text="Add Todo" type="button" />
        ];

        let  View = this.state.addTodo ? addTodoClass : ListTodoClass;

        return (
            <section className='todo-app'>
              {View}
            </section>
        );
    }
}
