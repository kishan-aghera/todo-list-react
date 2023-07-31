export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_IS_EDIT = "UPDATE_IS_EDIT";
export const UPDATE_TODO_FORM = "UPDATE_TODO_FORM";
export const UPDATE_ID = "UPDATE_ID";

export const initialState = {
  todos: [],
  isEdit: false,
  todo: "",
  id: -1,
  counter: 0,
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const updateTodo = (todo, id) => {
  return {
    type: UPDATE_TODO,
    todo,
    id,
  };
};

export const updateIsEdit = (isEdit) => {
  return {
    type: UPDATE_IS_EDIT,
    isEdit,
  };
};

export const updateTodoForm = (value) => {
  return {
    type: UPDATE_TODO_FORM,
    todo: value,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const updateId = (id) => {
  return {
    type: UPDATE_ID,
    id,
  };
};
