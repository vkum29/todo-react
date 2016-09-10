import React from 'react';

import Item from './item.jsx';

export default class List extends React.Component {
  render() {
    console.log('lists ',this.props);
    let Items = this.props.items.map((item) => {
      return <Item {...item} key={item.id} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo}/>
    });

    return (
      <ul className='todo-list'>
        {Items}
      </ul>
    );
  }
}
