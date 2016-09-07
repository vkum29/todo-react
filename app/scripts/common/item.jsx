import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
  render() {
    let newLocation = "todo/"+this.props.id;
    return (
      <li className='todo-list__item'>
        <Link to={newLocation} >{this.props.title}</Link>
      </li>
    );
  }
}
