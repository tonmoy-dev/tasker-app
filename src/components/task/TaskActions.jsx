import SearchTask from "./SearchTask";

export default function TaskActions({ onAddTask }) {
  return (
    <div className="flex items-center space-x-5">
      <SearchTask />
      <button
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={onAddTask}
      >
        Add Task
      </button>
      <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
        Delete All
      </button>
    </div>
  );
}
