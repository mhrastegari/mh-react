import { PlayerType } from "../types";

interface Props {
  index: number;
  onClick(): void;
  player?: PlayerType;
}

export function Square(props: Props) {
  const scale = props.player ? "scale-100" : "scale-0";
  const textColor = props.player === "X" ? "text-yellow-200" : "text-fuchsia-300";

  return (
    <div
      onClick={() => props.onClick()}
      className="aspect-square border-solid border-4 border-slate-500 text-7xl text-center flex justify-center items-center cursor-pointer transition duration-500 hover:scale-105 transform"
    >
      <span
        className={`transform transition-all duration-150 ease-out ${scale} ${textColor}`}
      >
        {props.player}
      </span>
    </div>
  );
}
