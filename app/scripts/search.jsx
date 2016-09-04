import React from 'react';
import '../styles/form.css';

import TextField from './common/input.jsx';

export default class Search extends React.Component{
    constructor() {
      super();
      this.state = {
        searchTerm : ''
      };
    }

    search(e) {
      e.preventDefault();
      console.log('Searching for', e.target.value);
      this.setState({searchTerm: e.target.value});
      this.props.filterItems(e.target.value);
    }

    render() {
        return (
        <form className="custom-form custom-form-search" onChange={this.search.bind(this)}>
          <TextField
            id="searchTerm"
            value={this.state.searchTerm}
            placeholder="Enter search term"
            name="searchTerm"
            label={'Searching for '+this.state.searchTerm}
            type="text"
          />
          </form>
        );
    }
}
