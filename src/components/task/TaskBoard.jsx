import { useState } from "react";
import { useTasks } from "../../contexts/TasksProvider";
import NoTaskFound from "./NoTaskFound";
import TaskActions from "./TaskActions";
import TasksList from "./TasksList";

export default function TaskBoard() {
  // const [showTaskModal, setShowTaskModal] = useState(false);
  // const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isAllTasksDeleted, setIsAllTasksDeleted] = useState(false);
  const tasks = useTasks();

  // function handleEditTask(task) {
  //   setTaskToUpdate(task);
  //   setShowTaskModal(true);
  // }

  return (
    <section className="mb-20" id="tasks">
      <div className="">
        {/* {showTaskModal && (
          <AddTaskModal
            taskToUpdate={taskToUpdate}
            setShowTaskModal={setShowTaskModal}
            setTaskToUpdate={setTaskToUpdate}
          />
        )} */}
      </div>
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskActions
              setIsAllTasksDeleted={setIsAllTasksDeleted}
              isAllTasksDeleted={isAllTasksDeleted}
            />
          </div>
          {tasks.length > 0 ? <TasksList /> : <NoTaskFound />}
        </div>
      </div>
    </section>
  );
}
