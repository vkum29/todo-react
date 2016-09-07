import React from 'react';

import Item from './item.jsx';

export default class List extends React.Component {
  render() {
    let Items = this.props.items.map((item) => {
      return <Item {...item} key={item.id}/>
    });

    return (
      <ul className='todo-list'>
        {Items}
      </ul>
    );
  }
}
