export function CreateTodo(payload) {
  //payload = { title , desc }
  return { type: "CREATE_TODO", payload };
}

export function DeleteTodo(payload) {
  //payload = id
  return { type: "DELETE_TODO", payload };
}

export function CompleteTodo(payload) {
  //payload = id
  return { type: "COMPLETE_TODO", payload };
}

export function FilterTodo(payload) {
  //payload = text
  return { type: "FILTER_TODO", payload };
}

export function ClearFilterTodo(payload) {
  //payload = null/undefined
  return { type: "CLEAR_FILTER_TODO", payload };
}

export function SelectTodo(payload) {
  //payload = todo
  return { type: "SELECT_TODO", payload };
}

export function UnSelectTodo(payload) {
  //payload = null/undefined
  return { type: "UNSELECT_TODO", payload };
}

export function ShowAddNewTodo(payload) {
  //payload = null/undefined
  return { type: "SHOW_ADD_NEW_TODO", payload };
}

export function HideAddNewTodo(payload) {
  //payload = null/undefined
  return { type: "HIDE_ADD_NEW_TODO", payload };
}
