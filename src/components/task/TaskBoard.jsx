import { useReducer, useState } from "react";
import initialTasks from "../../assets/data/initialTasks.json";
import taskReducer from "../../reducers/taskReducer";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import TaskActions from "./TaskActions";
import TasksList from "./TasksList";

export default function TaskBoard() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isAllTasksDeleted, setIsAllTasksDeleted] = useState(false);

  // console.log(tasks);
  const defaultTasks = [...initialTasks];

  function handleAddTask(newTask, isAddTask) {
    if (isAddTask) {
      dispatch({
        type: "ADD_TASK",
        payload: { newTask },
      });
    } else {
      setTaskToUpdate(null);
      dispatch({
        type: "EDIT_TASK",
        payload: { newTask },
      });
    }
    setShowTaskModal(false);
  }
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowTaskModal(true);
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "DELETE_TASK",
      payload: { taskId },
    });
  }

  function handleDeleteAllTasks() {
    dispatch({
      type: "DELETE_ALL_TASKS",
    });
    setIsAllTasksDeleted(true);
  }
  function handleFavoriteToggle(taskId) {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: { taskId },
    });
  }
  function handleSearchTasks(searchKey) {
    if (searchKey) {
      dispatch({
        type: "SEARCH_TASKS",
        payload: { searchKey },
      });
    } else {
      if (!isAllTasksDeleted) {
        dispatch({
          type: "NO_SEARCH",
          payload: { allTasks: [...defaultTasks] },
        });
      }
    }
  }

  return (
    <section className="mb-20" id="tasks">
      <div className="">
        {showTaskModal && (
          <AddTaskModal
            tasks={tasks}
            onSaveTask={handleAddTask}
            taskToUpdate={taskToUpdate}
          />
        )}
      </div>
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskActions
              onAddTask={() => setShowTaskModal(true)}
              onDeleteAllTasks={handleDeleteAllTasks}
              onSearchTasks={handleSearchTasks}
            />
          </div>
          {tasks.length > 0 ? (
            <TasksList
              tasks={tasks}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onFavorite={handleFavoriteToggle}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
