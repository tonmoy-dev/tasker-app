import initialTasks from "../assets/data/initialTasks.json";

export default function taskReducer(tasks, action) {
  const { payload } = action;
  // console.log(action);

  switch (action.type) {
    case "ADD_TASK": {
      return [...tasks, payload.newTask];
    }
    case "EDIT_TASK": {
      return tasks.map((task) => {
        return task.id === payload.newTask.id ? payload.newTask : task;
      });
    }
    case "DELETE_TASK": {
      return tasks.filter((task) => task.id !== payload.taskId);
    }
    case "DELETE_ALL_TASKS": {
      tasks.length = 0;
      return [...tasks];
    }
    case "TOGGLE_FAVORITE": {
      return tasks.map((task) => {
        return task.id === payload.taskId
          ? { ...task, isFavorite: !task.isFavorite }
          : task;
      });
    }
    case "SEARCH_TASKS": {
      return tasks.filter((task) =>
        task.title.toLowerCase().includes(payload.searchKey.toLowerCase())
      );
    }
    case "NO_SEARCH": {
      const allTasks = [...initialTasks];
      return allTasks;
    }

    default:
      break;
  }
}
