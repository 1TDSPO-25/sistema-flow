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
            setError(null);
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${c0a23509a1bfccf9a4c75934e9cf09c8}&units=metric&lang=pt_br`
            );
            if(!res.ok) throw new Error("Cidade não encontrada");
            const json = await res.json();
            setData(json);
            } catch(err : any){
                setError(err.message);
                setData(null);
            } finally{
                setLoading(false);
            }
            
        }
}