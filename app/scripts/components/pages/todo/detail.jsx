import React from 'react';
import '../../../../styles/todo.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SelectTodo, UnSelectTodo } from '../../../actions/todo.action.jsx';

class TodoDetails extends React.Component {
    render() {
      let items = Object.assign([],this.props.items);
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

function MapStore(state) {
  return {
    items: state.todos
  }
}

function BindActions(dispatch){
  return bindActionCreators({
    unSelectTodo: UnSelectTodo
  }, dispatch)
}

export default connect(MapStore, BindActions)(TodoDetails);
