import { Square } from "./Square";
import { useGameLogic } from "../hooks/useGameLogic";

export function GameBoard() {
  const { currentPlayer, scores, gameState, handleSquareClick } = useGameLogic();

  return (
    <div className="h-screen flex flex-col items-center p-4">
      <div className="grid grid-cols-3 gap-3 w-full max-w-md">
        {gameState.map((player, index) => (
          <Square
            key={index}
            index={index}
            player={player}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
      <div className="py-4 text-center">
        <p>Next player: {currentPlayer}</p>
        <p>Player X wins: {scores["X"]}</p>
        <p>Player 0 wins: {scores["0"]}</p>
      </div>
    </div>
  );
}
