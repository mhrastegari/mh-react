import TodoList from "./components/TodoList";
import { TaskProvider } from "./hooks/useTaskState";
export { default as Todo } from "./App";

export default function App() {
  return (
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  );
}
