import React from 'react';

import '../../styles/item.css';

export default class Item extends React.Component {
  render() {
    return (
      <li className='todo-list__item'>
        {this.props.text}
      </li>
    );
  }
}
