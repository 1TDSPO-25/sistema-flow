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
}