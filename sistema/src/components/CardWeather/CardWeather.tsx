import { useState, useEffect } from "react";

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };

    weather: { description: string}[];
    wind: { speed: number };
}


export default function CardWeather(){
    const[city, setCity] = useState("São Paulo");
    const[data, setData] = useState<WeatherData | null>(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");

    const apiKey = "c0a23509a1bfccf9a4c75934e9cf09c8";

    async function getWeather(city: string){
        try{
            setLoading(true);
            setError("");
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
            );
            if(!res.ok) throw new Error("Cidade não encontrada");
            const json = await res.json();
            setData(json);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocorreu um erro desconhecido");
                }
                setData(null);
            } finally{
                setLoading(false);
            } 
        }
        
        useEffect(() => {
            getWeather(city);
        }, [city]);

        function handleSubmit(e: React.FormEvent){
            e.preventDefault();
            getWeather(city);
        }


        return (
            <div>
            <h2>Previsão do Tempo</h2>

            <form onSubmit={handleSubmit}>
                <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Digite uma cidade"
                />
                <button type="submit">Buscar</button>
            </form>

            {loading && <p>Carregando</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {data && (
                <div>
                <h3>{data.name}</h3>
                <p>{data.weather[0].description}</p>
                <p>Temperatura: {Math.round(data.main.temp)}°C</p>
                <p>Vento: {data.wind.speed} km/h</p>
                <p>Umidade: {data.main.humidity}%</p>
                </div>
            )}
            </div>
        );
}