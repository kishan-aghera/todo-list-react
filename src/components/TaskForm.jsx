/* eslint-disable react/prop-types */
const TaskForm = ({ todo, changeHandler, isEdit, submitHandler }) => {
  return (
    <form
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4  rounded-lg md:flex-row md:space-y-0 md:space-x-3"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="flex-1 p-3 border-2 rounded-lg placeholder-gray-500 focus:outline-none text-black"
        placeholder="Task name"
        value={todo}
        onChange={changeHandler}
      />

      <button className="px-10 py-3 text-white bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none md:py-2">
        {isEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TaskForm;
