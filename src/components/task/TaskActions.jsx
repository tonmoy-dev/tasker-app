import { useState } from "react";
import { useTasksDispatch } from "../../contexts/TasksProvider";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";

export default function TaskActions({
  setIsAllTasksDeleted,
  isAllTasksDeleted,
}) {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const dispatch = useTasksDispatch();

  return (
    <>
      {showTaskModal && (
        <AddTaskModal setShowTaskModal={setShowTaskModal} taskToUpdate={null} />
      )}

      <div className="flex items-center space-x-5">
        <SearchTask isAllTasksDeleted={isAllTasksDeleted} />
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => setShowTaskModal(true)}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => {
            dispatch({
              type: "DELETE_ALL_TASKS",
            });
            setIsAllTasksDeleted(true);
          }}
        >
          Delete All
        </button>
      </div>
    </>
  );
}
