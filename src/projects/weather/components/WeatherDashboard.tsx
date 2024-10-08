import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";

interface WeatherData {
  temperatureC: number;
  temperatureF: number;
  description: string;
  windSpeed: number;
  humidity: number;
}

export function WeatherDashboard() {
  const [city, setCity] = useState<string>("London");
  const [inputCity, setInputCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const fetchWeather = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );
        const data = response.data;
        setWeather({
          temperatureC: data.current.temp_c,
          temperatureF: data.current.temp_f,
          description: data.current.condition.text,
          humidity: data.current.humidity,
          windSpeed: data.current.wind_kph,
        });

        setError(null);
      } catch (ex) {
        if (axios.isAxiosError(ex) && ex.response?.status === 400) {
          setError("City not found. Please enter a valid city name.");
        } else {
          setError("Failed to fetch weather data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity.trim());
      setInputCity("");
    }
  };

  const inputCityRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputCityRef.current) {
      inputCityRef.current.focus();
    }
  }, [inputCity]);

  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-md sm:max-w-lg lg:max-w-xl">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputCity}
          ref={inputCityRef}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 border border-gray-300 rounded w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && (
        <div className="min-h-32 flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {weather && !loading && !error && (
        <div>
          <h1 className="text-xl font-bold">
            {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-lg">
              {unit === "C"
                ? weather.temperatureC + "°C"
                : weather.temperatureF + "°F"}
            </p>
            <button
              onClick={() => setUnit(unit === "C" ? "F" : "C")}
              className=" bg-transparent hover:bg-gray-300 text-black py-1 px-2 rounded"
            >
              Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
            </button>
          </div>
          <p>{weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} kph</p>
        </div>
      )}
    </div>
  );
}
