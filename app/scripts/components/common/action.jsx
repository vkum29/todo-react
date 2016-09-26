import React from 'react';

export default class Action extends React.Component {
  constructor() {
    super();
    this.action = this.action.bind(this);
  }

  action(e) {
    if (this.props.action) {
      e.preventDefault();
      this.props.action(e);
    }
  }

  render() {
    const classname = `btn btn-${this.props.classname ? this.props.classname : 'default'}`;
    return (
      <p>
        <button className={classname} onClick={this.action} type={this.props.type} >{this.props.text}</button>
      </p>
    );
  }
}
