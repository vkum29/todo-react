import React from 'react';
import {Link} from 'react-router';

import Button from './action.jsx';

export default class Item extends React.Component {
  constructor() {
    super();
    this.completeTodo = this.completeTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  //props delete and complete recives id
  completeTodo(){
    this.props.completeTodo(this.props.id);
  }

  deleteTodo() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    const TARGETLOCATION = `todo/${this.props.id}`;
    const CLASSNAME = `todo-list__item todo-list__item${this.props.complete ? '--complete' : '--pending'}`;
    let ITEMLIST = [];
    if (this.props.complete !== true) {
      ITEMLIST = [
        <Link key='1' to={TARGETLOCATION} >{this.props.title}</Link>,
        <Button key='2' action={ this.completeTodo } text="" type="button" classname="success"/>,
        <Button key='3' action={ this.deleteTodo } text="" type="button" classname="danger"/>
      ];
    } else {
      ITEMLIST = [
        <Link key='1' to={TARGETLOCATION} >{this.props.title}</Link>,
        <Button key='2' action={ this.deleteTodo } text="" type="button" classname="danger"/>
      ];
    }
    return (
      <li className={CLASSNAME}>
        {ITEMLIST}
      </li>
    );
  }
}
