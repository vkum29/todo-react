import React from 'react';
import {Link} from 'react-router';

import Title from './title.jsx';
import Text from '../common/text.jsx';

import '../../styles/nav.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Title text={this.props.title}/>
        <Text text={this.props.subtitle}/>
        <nav>
          <ul>
            <li>
              <Link to="/" activeClassName="active">App</Link> 
            </li>
            <li>
              <Link to="about" activeClassName="active">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
