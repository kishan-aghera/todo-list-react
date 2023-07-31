import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(-1);

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo !== "") {
      if (isEdit) {
        const updatedTodos = todos.map((t, i) => {
          return i == id ? todo : t;
        });
        setTodos(updatedTodos);
        setIsEdit(false);
      } else {
        const newTodos = [...todos, [todo]];
        setTodos(newTodos);
      }
      setTodo("");
    }
  };

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const deleteHandler = (i) => {
    const updatedTodos = todos.filter((todo, index) => i !== index);
    setTodos(updatedTodos);
  };

  const editHandler = (i) => {
    setIsEdit(true);
    setId(i);
    const oldTodo = todos.filter((t, ind) => ind == i);
    setTodo(oldTodo);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly items-center">
      <h1 className="text-5xl  mx-auto py-5">Tasks</h1>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <TaskForm
          todo={todo}
          changeHandler={changeHandler}
          isEdit={isEdit}
          submitHandler={submitHandler}
        />
      </div>

      <div className="max-w-4xl mx-auto p-6 flex flex-col justify-between space-y-4">
        {todos &&
          todos.map((todo, index) => (
            <Task
              key={index}
              todo={todo}
              index={index}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
