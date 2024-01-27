import { useState } from "react";
import { useTasks } from "../../contexts/TasksProvider";
import AddTaskModal from "./AddTaskModal";
import Task from "./Task";

export default function TasksList() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const tasks = useTasks();
  return (
    <>
      {showTaskModal && (
        <AddTaskModal
          setShowTaskModal={setShowTaskModal}
          taskToUpdate={taskToUpdate}
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
