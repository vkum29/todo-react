import React from 'react';
import '../../../../styles/todo.css';

import Search from './search.jsx';
import ListTodos from '../../common/lists.jsx';
import Action from '../../common/action.jsx';
import AddTodo from './addtodo.jsx';

import * as TodoAction from '../../../actions/todo.action.jsx';
import TodoStore from '../../../stores/todo.store.jsx';

export default class Todo extends React.Component {
  constructor() {
    super();
    this.getAllTodos = this.getAllTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.showAddTodoForm = this.showAddTodoForm.bind(this);

    this.state = {
      addTodo: false,
      searchQuery: '',
      items: TodoStore.getAllTodos()
    };
  }

  getAllTodos() {
    this.setState({
      addTodo: false,
      searchQuery: '',
      items: TodoStore.getAllTodos()
    });
  }

  componentWillMount() {
    TodoStore.on("change", this.getAllTodos);
  }

  componentWillUnMount() {
    TodoStore.removeListener("change", this.getAllTodos);
  }

  filterResults(query) {
    let items = this.state.items;
    if (query) {
      items = items.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });
    }
    return items;
  }

  addTodo(todo) {
    TodoAction.createTodo(todo);
  }

  deleteTodo(id) {
    TodoAction.deleteTodo(id);
  }

  completeTodo(id) {
    TodoAction.completeTodo(id);
  }

  showAddTodoForm() {
    this.setState({
      addTodo: true
    });
  }

  setSearchQuery(query) {
    this.setState({
      searchQuery: (query || '')
    });
  }

  render() {
    const ITEMS = this.filterResults(this.state.searchQuery);
    const ADD_TODO = [ < AddTodo key = "1" action = { this.addTodo } />];
    const LIST_TODO = [
      <Search key = "1" filterItems = { this.setSearchQuery } query={ this.state.searchQuery }/>,
      <ListTodos key = "2" items = { ITEMS } deleteTodo={ this.deleteTodo } completeTodo={this.completeTodo} />,
      <Action key = "3" action = { this.showAddTodoForm } text = "Add Todo" type = "button" />
    ];

    const VIEW = this.state.addTodo ? ADD_TODO : LIST_TODO;

    return (
      <section className = 'content' > { VIEW } </section>
    );
  }
}
