import { useState, useEffect } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: { description: string }[];
}

export function CardWeather() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const city = "São Paulo";
  const apiKey = "c0a23509a1bfccf9a4c75934e9cf09c8";

  async function getWeather() {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      if (!res.ok) throw new Error("Cidade não encontrada");
      const json = await res.json();
      setData(json);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Ocorreu um erro desconhecido");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="flex items-center gap-3 bg-gray-700 text-white rounded-2xl px-4 py-2 text-sm shadow-md border border-gray-600 select-none">
      {loading && <span>Carregando...</span>}
      {error && <span style={{ color: "red" }}>{error}</span>}
      {data && (
        <span>
          {data.name}: {Math.round(data.main.temp)}°C | {" "}
          {data.weather[0].description}
        </span>
      )}
    </div>
  );
}
