import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks, useTasksDispatch } from "../../contexts/TasksProvider";

export default function AddTaskModal({ taskToUpdate, setShowTaskModal }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const [errors, setErrors] = useState([]);
  const [isAddTask, setIsAddTask] = useState(Object.is(taskToUpdate, null));
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  // validating form fields
  function validateTask(task) {
    let errorsArr = [];
    for (const key in task) {
      if (task[key] === null || task[key] === "") {
        errorsArr = [...errorsArr, key];
      } else if (Array.isArray(task[key]) && task[key].length === 0) {
        errorsArr = [...errorsArr, key];
      }
    }
    setErrors(errorsArr);
    if (errorsArr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // handling inputs
  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  }

  // handling form submission
  function handleSubmit(e) {
    e.preventDefault();
    // checking inputs validation
    if (validateTask(task)) {
      const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;
      const newTask = { id: nextId, ...task };
      if (isAddTask) {
        dispatch({
          type: "ADD_TASK",
          payload: { newTask },
        });
        toast.success(`A New Task Is Added !`);
      } else {
        dispatch({
          type: "EDIT_TASK",
          payload: { newTask },
        });
        toast.success(`Task Is Updated !`);
      }
      setShowTaskModal(false);
    }
  }
  return (
    <>
      <div className="bg-black w-screen bg-opacity-60 h-full w-full z-10 fixed top-0 left-0"></div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/4 overflow-auto"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAddTask ? "Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className={`block w-full rounded-md bg-[#2D323F] px-3 py-2.5 ${
                errors.includes("title") && "border border-red-500"
              }`}
              type="text"
              name="title"
              id="title"
              // required
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className={`block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px] ${
                errors.includes("description") && "border border-red-500"
              }`}
              type="text"
              name="description"
              id="description"
              // required
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className={`block w-full rounded-md bg-[#2D323F] px-3 py-2.5 ${
                  errors.includes("tags") && "border border-red-500"
                }`}
                type="text"
                name="tags"
                id="tags"
                // required
                value={task.tags}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className={`block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5 ${
                  errors.includes("priority") && "border border-red-500"
                }`}
                name="priority"
                id="priority"
                // required
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        {errors.length > 0 && (
          <div className="mx-auto rounded-lg border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-4 py-3 mt-4 flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            <p className="text-red-500 font-semibold">
              {errors.join(", ")} is required !
            </p>
          </div>
        )}

        <div className="mt-16 flex justify-center gap-6 lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {isAddTask ? "Create new Task" : "Save Task"}
          </button>
          <button
            onClick={() => setShowTaskModal(false)}
            className="shadow-sm bg-gray-700 rounded px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
