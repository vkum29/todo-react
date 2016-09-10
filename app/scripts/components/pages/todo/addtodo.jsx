import React from 'react';
import '../../../../styles/form.css';

import TextField from '../../common/input.jsx';
import Action from '../../common/action.jsx';

export default class Todo extends React.Component {
  action(e) {
    console.log('action');
    e.preventDefault();
    if (e.target.title.value && e.target.title.value.length) {
      let todo = {
        id: Date.now(),
        title: e.target.title.value,
        desc: e.target.desc.value || ''
      };

      this.props.action(todo);
    } else {
      this.props.action();
    }
  }

  dummyAction(e) {
    console.log('dummyAction');
    e.target.form.submit();
  }

  render() {
    return (
      <form className="custom-form custom-form-todo" onSubmit={this.action.bind(this)}>
        <TextField id="todoTitle" placeholder="Enter todo title" name="title" label="Title" type="text"/>
        <TextField id="todoDesc" placeholder="Enter Description" name="desc" label="Description" type="text"/>
        <Action text="Submit" type="submit"/>
      </form>
    );
  }
}
