import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks, useTasksDispatch } from "../../contexts/TasksProvider";
import ConfirmDialog from "../utility/ConfirmDialog";
import AddTaskModal from "./AddTaskModal";
import Task from "./Task";

export default function TasksList() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  // handle delete confirmation
  function handleDeleteConfirm() {
    dispatch({
      type: "DELETE_TASK",
      payload: { taskId },
    });
    setIsShowDialog(false);
    toast.success(`Task Is Removed !`);
  }

  return (
    <>
      {showTaskModal && (
        <AddTaskModal
          setShowTaskModal={setShowTaskModal}
          taskToUpdate={taskToUpdate}
        />
      )}
      {isShowDialog && (
        <ConfirmDialog
          title="delete this task"
          setIsShowDialog={setIsShowDialog}
          setIsConfirm={setIsConfirm}
          onDeleteConfirm={handleDeleteConfirm}
        />
      )}
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {" "}
                Description{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {" "}
                Tags{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Options{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                setTaskToUpdate={setTaskToUpdate}
                setShowTaskModal={setShowTaskModal}
                setIsShowDialog={setIsShowDialog}
                setTaskId={setTaskId}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
