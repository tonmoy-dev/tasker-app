import { createContext, useContext, useReducer } from "react";
import initialTasks from "../assets/data/initialTasks.json";
import taskReducer from "../reducers/taskReducer";

// tasks contexts
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
export const useTasksDispatch = () => useContext(TasksDispatchContext);
