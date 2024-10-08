import { WeatherDashboard } from "./components/WeatherDashboard";
export { default as Weather } from "./App";

export default function App() {
  return (
    <div className="flex h-full justify-center items-center">
      <WeatherDashboard />
    </div>
  );
}
