import React from 'react';

import Item from './item.jsx';

import '../../styles/list.css';

export default class List extends React.Component {
  render() {
    let Items = this.props.items.map((item) => {
      return <Item text={item.text} key={item.id}/>
    });

    return (
      <ul className='todo-list'>
        {Items}
      </ul>
    );
  }
}
