import React from 'react';
import '../../../../styles/form.css';

import TextField from '../../common/input.jsx';

export default class Search extends React.Component{
    constructor() {
      super();
      this.search = this.search.bind(this);
    }

    search(e) {
      console.log('search');
      e.preventDefault();
      this.props.filterItems(e.target.value);
    }

    render() {
        return (
        <form className="custom-form custom-form-search" onChange={this.search}>
          <TextField
            id="searchTerm"
            defaultValue={this.props.query}
            placeholder="Enter search term"
            name="searchTerm"
            label={'Searching for '+this.props.query}
            type="text"
          />
          </form>
        );
    }
}
