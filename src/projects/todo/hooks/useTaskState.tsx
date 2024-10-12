import {
  useMemo,
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";
import { getTasks, saveTasks } from "../db";
import { Task, TaskSort, TaskFilter, TaskContext } from "../types";

const TaskStateContext = createContext<TaskContext>(null!);

export function useTasks() {
  return useContext(TaskStateContext).tasks;
}

export function useSetTasks() {
  return useContext(TaskStateContext).setTasks;
}

export function useSortBy() {
  return useContext(TaskStateContext).sortBy;
}

export function useSetSortBy() {
  return useContext(TaskStateContext).setSortBy;
}

export function useFilter() {
  return useContext(TaskStateContext).filter;
}

export function useSetFilter() {
  return useContext(TaskStateContext).setFilter;
}

export function useDisplayedTasks() {
  return useContext(TaskStateContext).displayedTasks;
}

export function TaskProvider(props: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [sortBy, setSortBy] = useState<TaskSort>("none");
  const [filter, setFilter] = useState<TaskFilter>("all");

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await getTasks();
      setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    const save = async () => await saveTasks(tasks);
    if (tasks.length) save();
  }, [tasks]);

  const displayedTasks = useMemo(() => {
    let filteredTasks = tasks;

    switch (filter) {
      case "done":
        filteredTasks = tasks.filter((task) => task.completed);
        break;
      case "active":
        filteredTasks = tasks.filter((task) => !task.completed);
        break;
      default:
        break;
    }

    let sortedTasks = filteredTasks;
    switch (sortBy) {
      case "alphabetical":
        sortedTasks = filteredTasks.sort((a, b) =>
          a.text.localeCompare(b.text)
        );
        break;
      case "date":
        sortedTasks = filteredTasks.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      default:
        break;
    }

    return sortedTasks;
  }, [tasks, sortBy, filter]);

  return (
    <TaskStateContext.Provider
      value={{
        tasks,
        setTasks,
        sortBy,
        setSortBy,
        filter,
        setFilter,
        displayedTasks,
      }}
    >
      {props.children}
    </TaskStateContext.Provider>
  );
}
