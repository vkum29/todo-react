import React from 'react';
import '../../../../styles/form.css';

import TextField from '../../common/input.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FilterTodo, ClearFilterTodo } from '../../../actions/todo.action.jsx';

class Search extends React.Component{
    constructor() {
      super();
      this.search = this.search.bind(this);
    }

    search(e) {
      e.preventDefault();
      if(e.target.value){
        this.props.filterTodo(e.target.value);
      } else {
        this.props.clearFilter(e.target.value);
      }
    }

    render() {
        return (
        <form className="custom-form custom-form-search" onChange={this.search}>
          <TextField
            id="searchTerm"
            defaultValue={this.props.filter}
            placeholder="Enter search term"
            name="searchTerm"
            label={'Searching for '+this.props.filter}
            type="text"
          />
          </form>
        );
    }
}


function MapStore(state) {
  return {
    filter: state.filter
  }
}

function BindActions(dispatch){
  return bindActionCreators({
    filterTodo: FilterTodo,
    clearFilter: ClearFilterTodo
  }, dispatch)
}

export default connect(MapStore, BindActions)(Search);
