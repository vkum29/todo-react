import React from 'react';

import Title from './title.jsx';
import Text from '../common/text.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Title text={this.props.title}/>
        <Text text={this.props.subtitle}/>
      </header>
    );
  }
}
