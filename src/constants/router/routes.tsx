import Home from "../../components/Home";
import Todo from "../../projects/todo/App";
import Weather from "../../projects/weather/App";
import TicTacToe from "../../projects/tic-tac-toe/App";

//For GitHub Pages
const basename = import.meta.env.DEV ? "/" : "/mh-react";

export const ROUTES = [
  {
    path: basename,
    element: <Home />,
    title: `${basename}/Home`,
  },
  {
    path: `${basename}/todo`,
    element: <Todo />,
    title: "Todo",
  },
  {
    path: `${basename}/weather`,
    element: <Weather />,
    title: "Weather Dashboard",
  },
  {
    path: `${basename}/tictactoe`,
    element: <TicTacToe />,
    title: "Tic Tac Toe",
  },
];
