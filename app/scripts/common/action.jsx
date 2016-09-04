import React from 'react';

export default class Action extends React.Component {
  constructor() {
    super();
    this.state = {
      addTodo: false
    }
  }

  action(e) {
    if (this.props.action) {
      e.preventDefault();
      this.props.action(e);
    }
  }

  render() {
    let AddButton = this.state.addTodo
      ? 'hidden'
      : 'visible';
    let AddForm = this.state.addTodo
      ? 'visible'
      : 'hidden';

    return (
      <p>
        <button onClick={this.action.bind(this)} type={this.props.type}>{this.props.text}</button>
      </p>
    );
  }
}
