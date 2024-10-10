import Home from "../../components/Home";
import Todo from "../../projects/todo/App";
import Weather from "../../projects/weather/App";
import TicTacToe from "../../projects/tic-tac-toe/App";

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/todo",
    element: <Todo />,
    title: "Todo",
  },
  {
    path: "/weather",
    element: <Weather />,
    title: "Weather Dashboard",
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
    title: "Tic Tac Toe",
  },
];
