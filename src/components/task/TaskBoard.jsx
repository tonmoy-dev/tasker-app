import { useState } from "react";
import initialTasks from "../../assets/data/initialTasks.json";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import TaskActions from "./TaskActions";
import TasksList from "./TasksList";

export default function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  // console.log(tasks);

  function handleAddTask(newTask, isAddTask) {
    if (isAddTask) {
      setTasks([...tasks, newTask]);
    } else {
      setTaskToUpdate(null);
      setTasks(
        tasks.map((task) => {
          return task.id === newTask.id ? newTask : task;
        })
      );
    }
    setShowTaskModal(false);
  }
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowTaskModal(true);
  }
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  function handleDeleteAllTasks() {
    setTasks([]);
  }
  return (
    <section className="mb-20" id="tasks">
      <div className="">
        {showTaskModal ? (
          <AddTaskModal
            tasks={tasks}
            onSaveTask={handleAddTask}
            taskToUpdate={taskToUpdate}
          />
        ) : (
          ""
        )}
      </div>
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskActions
              onAddTask={() => setShowTaskModal(true)}
              onDeleteAllTasks={handleDeleteAllTasks}
            />
          </div>
          {tasks.length > 0 ? (
            <TasksList
              tasks={tasks}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
