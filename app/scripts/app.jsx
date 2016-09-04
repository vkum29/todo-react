import React from 'react';
import {render} from 'react-dom';

import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Todo from './todo.jsx';

import '../styles/app.css';

class App extends React.Component{
    constructor (){
      super();
      this.state = {
        title : 'Todo',
        subtitle : 'React hands on application'
      }
    }
    render() {
        console.log('this.state.title',this.state.title, 'this.state.subtitle', this.state.subtitle);
        return (
          <div>
            <Header title={this.state.title} subtitle={this.state.subtitle}></Header>
            <Todo></Todo>
            <Footer> </Footer>
          </div>
        );
    }
}

render(<App/>, document.getElementById('todo-app'));
