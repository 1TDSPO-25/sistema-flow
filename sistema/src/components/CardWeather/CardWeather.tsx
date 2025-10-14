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
    return(
        <div>
            <h1>Weather</h1>
        </div>
    );
}