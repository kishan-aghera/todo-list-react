import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_ID,
  UPDATE_IS_EDIT,
  UPDATE_TODO,
  UPDATE_TODO_FORM,
  initialState,
} from "../constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: state.counter + 1, todo: action.todo }],
        counter: state.counter + 1,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id),
        counter: state.counter - 1,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.id) {
            return { id: t.id, todo: action.todo };
          } else {
            return t;
          }
        }),
      };
    case UPDATE_IS_EDIT:
      return { ...state, isEdit: action.isEdit };
    case UPDATE_TODO_FORM:
      return {
        ...state,
        todo: action.todo,
      };
    case UPDATE_ID:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
