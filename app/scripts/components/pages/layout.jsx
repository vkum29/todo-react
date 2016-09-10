import React from 'react';

import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import Todo from '../pages/todo/todo.jsx';

import '../../../styles/app.css';

export default class Layout extends React.Component{
    constructor() {
      super();
      this.state = {
        title : 'Todo',
        subtitle : 'React hands on application'
      }
    }

    navigate() {
      console.log('navigate');
      this.props.history.replaceState(null, '/');
    }

    render() {
        return (
          <div>
            <Header title={this.state.title} subtitle={this.state.subtitle}></Header>
            {this.props.children}
            <Footer> </Footer>
          </div>
        );
    }
}
