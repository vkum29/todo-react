import TodoDispatcher from "../dispatchers/todo.dispatcher.jsx";

export function createTodo({ title , desc }) {
  TodoDispatcher.dispatch({ type: "CREATE_TODO", title, desc });
}

export function deleteTodo(id) {
  TodoDispatcher.dispatch({ type: "DELETE_TODO", id });
}

export function completeTodo(id) {
  TodoDispatcher.dispatch({ type: "COMPLETE_TODO", id });
}
