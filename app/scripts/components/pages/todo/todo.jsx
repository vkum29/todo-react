import React from 'react';
import '../../../../styles/todo.css';

import Search from './search.jsx';
import ListTodos from '../../common/lists.jsx';
import Action from '../../common/action.jsx';
import AddTodo from './addtodo.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CompleteTodo, DeleteTodo, ShowAddNewTodo, CreateTodo, HideAddNewTodo } from '../../../actions/todo.action.jsx';

class Todo extends React.Component {
  constructor() {
    super();
    this.showAddNewTodo = this.showAddNewTodo.bind(this);
  }

  showAddNewTodo(e) {
    this.props.ShowAddNewTodo(true);
  }

  render() {
    const ADD_TODO = [ < AddTodo key = "1" action = { this.props.createTodo } hideForm = {this.props.HideAddNewTodo}/>];
    const LIST_TODO = [
      <Search key = "1" />,
      <ListTodos key = "2" items = { this.props.items } deleteTodo={ this.props.deleteTodo } completeTodo={ this.props.completeTodo } />,
      <Action key = "3" action = { this.showAddNewTodo } text = "Add Todo" type = "button" />
    ];

    const VIEW = this.props.addNewTodo ? ADD_TODO : LIST_TODO;

    return (
      <section className = 'content' > { VIEW } </section>
    );
  }
}


function MapStore(state){
  return {
    items: state.todos,
    addNewTodo: state.addNewTodo
  }
}

function BindActions(dispatch){
  return bindActionCreators({
    ShowAddNewTodo: ShowAddNewTodo,
    HideAddNewTodo: HideAddNewTodo,
    completeTodo: CompleteTodo,
    deleteTodo: DeleteTodo,
    createTodo: CreateTodo
  }, dispatch)
}

export default connect(MapStore, BindActions)(Todo);
