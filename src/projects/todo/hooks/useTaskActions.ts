import { Task } from "../types";
import { useTasks, useSetTasks } from "../hooks";
import { saveTasks, deleteTaskById } from "../db";

export function useTaskActions() {
  const tasks = useTasks();
  const setTasks = useSetTasks();

  const updateTasks = async (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
  };

  const deleteTask = async (id: string) => {
    await deleteTaskById(id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    updatedTasks.forEach((task, i) => (task.index = i));
    updateTasks(updatedTasks);
  };

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      updatedTasks.forEach((task, i) => (task.index = i));
      updateTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      updatedTasks.forEach((task, i) => (task.index = i));
      updateTasks(updatedTasks);
    }
  }

  function toggleTask(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    updateTasks(updatedTasks);
  }

  return { deleteTask, moveTaskUp, moveTaskDown, toggleTask };
}
