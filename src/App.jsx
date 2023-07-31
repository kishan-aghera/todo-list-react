import { useReducer } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import reducer from "./reducers";
import {
  addTodo,
  deleteTodo,
  updateId,
  updateIsEdit,
  updateTodo,
  updateTodoForm,
  initialState,
} from "./constants";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (state.todo !== "") {
      if (state.isEdit) {
        dispatch(updateTodo(state.todo, state.id));
        dispatch(updateIsEdit(false));
      } else {
        dispatch(addTodo(state.todo));
      }
      dispatch(updateTodoForm(""));
    }
  };

  const changeHandler = (e) => {
    dispatch(updateTodoForm(e.target.value));
  };

  const deleteHandler = (i) => {
    dispatch(deleteTodo(i));
  };

  const editHandler = (i) => {
    dispatch(updateIsEdit(true));
    dispatch(updateId(i));
    const oldTodo = state.todos.filter((t) => t.id === i)[0].todo;
    dispatch(updateTodoForm(oldTodo));
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly items-center">
      <h1 className="text-5xl  mx-auto py-5">Tasks</h1>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <TaskForm
          todo={state.todo}
          changeHandler={changeHandler}
          isEdit={state.isEdit}
          submitHandler={submitHandler}
        />
      </div>

      <div className="max-w-4xl mx-auto p-6 flex flex-col justify-between space-y-4">
        {state.todos &&
          state.todos.map((todo) => (
            <Task
              key={todo.id}
              todo={todo.todo}
              index={todo.id}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
