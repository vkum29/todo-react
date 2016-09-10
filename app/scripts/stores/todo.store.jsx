import { EventEmitter } from "events";

import TodoDispatcher from "../dispatchers/todo.dispatcher.jsx";

import MockTodoData from "../../mocks/todos.jsx";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = MockTodoData;
  }

  handleAction(action) {
    console.log("handleAction", action);
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action);
        break;
      }
      case "DELETE_TODO": {
        this.deleteTodo(action.id);
        break;
      }
      case "COMPLETE_TODO": {
        this.completeTodo(action.id);
        break;
      }
      default: {
        console.log("Action recieved ", action.type);
      }
    }
  }

  getAllTodos() {
    return this.todos;
  }

  createTodo({title, desc = ''}) {
    console.log('createTodo', title, desc);
    const id = Date.now();
      if (title) {
        this.todos.push({
          id,
          title,
          desc,
          complete: false
        });
      }
      this.emit("change");
  }

  deleteTodo(id) {
    console.log('deleteTodo',id);
    this.todos = this.todos.filter((item) => { return item.id !== id });
    this.emit("change");
  }

  completeTodo(id) {
    console.log('completeTodo',id);
    this.todos.forEach((item) => {
      if (item.id === id) {
        item.complete = true;
        return;
      }
    });
    this.emit("change");
  }
}

//Using singleton as store has same data during component creation.
const todoStore = new TodoStore;
TodoDispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;
