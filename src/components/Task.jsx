/* eslint-disable react/prop-types */
const Task = ({ index, todo, editHandler, deleteHandler }) => {
  return (
    <div className="border rounded-lg p-2 flex justify-between items-center space-x-5">
      <span className="border rounded-lg px-5 py-3">{todo}</span>

      <button
        className="px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none md:py-2"
        onClick={() => editHandler(index)}
      >
        Edit
      </button>

      <button
        className="px-5 py-3 text-white bg-red-600 rounded-lg hover:bg-red-400 focus:outline-none md:py-2"
        onClick={() => deleteHandler(index)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
