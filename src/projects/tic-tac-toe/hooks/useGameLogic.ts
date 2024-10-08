import { PlayerType } from "../types";
import { useEffect, useState } from "react";

const initialGameState = Array(9).fill("");
const initialScores: Record<PlayerType, number> = { "X": 0, "0": 0 };
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function useGameLogic() {
  const [gameState, setGameState] = useState(initialGameState);
  const [currentPlayer, setCurrentPlayer] = useState<PlayerType>("X");
  const [scores, setScores] = useState(initialScores);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const storedScores = localStorage.getItem("scores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  const handleSquareClick = (index: number) => {
    if (gameState[index] || gameOver) return;

    const newValues = [...gameState];
    newValues[index] = currentPlayer;
    setGameState(newValues);
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  };

  const checkWinner = () => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo.map((index) => gameState[index]);
      if (a && a === b && b === c) {
        updateScores();
        setGameOver(true);
        return `Player ${currentPlayer} wins!`;
      }
    }

    if (!gameState.includes("")) {
      setGameOver(true);
      return "It's a draw!";
    }

    changePlayer();
  };

  const updateScores = () => {
    const newScores = { ...scores, [currentPlayer]: scores[currentPlayer] + 1 };
    setScores(newScores);
    localStorage.setItem("scores", JSON.stringify(newScores));
  };

  const resetGame = () => {
    setTimeout(() => {
      setGameState(initialGameState);
      setGameOver(false);
    }, 500);
  };

  useEffect(() => {
    if (gameState !== initialGameState) {
      const result = checkWinner();
      if (result) {
        setTimeout(() => {
          alert(result);
          resetGame();
        }, 100);
      }
    }
  }, [gameState]);

  return { gameState, currentPlayer, scores, handleSquareClick };
}
