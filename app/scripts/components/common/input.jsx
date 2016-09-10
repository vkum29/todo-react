import React from 'react';

export default class TextField extends React.Component {
  render() {
    let {
      type,
      name,
      id,
      placeholder,
      value,
      label
    } = this.props;
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder}/>
      </p>
    );
  }
}
