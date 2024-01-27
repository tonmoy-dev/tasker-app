import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks, useTasksDispatch } from "../../contexts/TasksProvider";
import ConfirmDialog from "../utility/ConfirmDialog";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";

export default function TaskActions() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [isAllTasksDeleted, setIsAllTasksDeleted] = useState(false);
  const dispatch = useTasksDispatch();
  const tasks = useTasks();

  // handle delete confirmation
  function handleDeleteConfirm() {
    if (tasks.length === 0) {
      toast.error(`Task list is already empty !`);
      toast.warning(`Please add a task !`);
    } else {
      dispatch({
        type: "DELETE_ALL_TASKS",
      });
      setIsAllTasksDeleted(true);
      setIsShowDialog(false);
      toast.success(`All tasks removed !`);
      toast.warning(`Task list is empty now !`);
    }
  }

  return (
    <>
      {showTaskModal && (
        <AddTaskModal setShowTaskModal={setShowTaskModal} taskToUpdate={null} />
      )}
      {isShowDialog && (
        <ConfirmDialog
          title="delete all tasks"
          setIsShowDialog={setIsShowDialog}
          onDeleteConfirm={handleDeleteConfirm}
        />
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
          onClick={() => setIsShowDialog(true)}
        >
          Delete All
        </button>
      </div>
    </>
  );
}
