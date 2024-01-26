import SearchTask from "./SearchTask";

export default function TaskActions({
  onAddTask,
  onDeleteAllTasks,
  onSearchTasks,
}) {
  return (
    <div className="flex items-center space-x-5">
      <SearchTask onSearchTasks={onSearchTasks} />
      <button
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={onAddTask}
      >
        Add Task
      </button>
      <button
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={onDeleteAllTasks}
      >
        Delete All
      </button>
    </div>
  );
}
