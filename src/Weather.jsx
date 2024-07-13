import './Weather.css';
import { useState } from 'react';
import img5 from "./assets/image5.jpg"
const WeatherPrediction = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c87e69e730mshf1d05e978775d80p1ee103jsn33b1ff67f2e7',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Error fetching the weather data');
            }
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            setError('Error fetching the weather data. Please try again.');
            console.error('Error fetching the weather data:', error);
        }
    };

    return (
        <div className="abc" style={{ backgroundImage: `url(${img5})` }}>
            <div className="weather-container">
                <h1>Weather Prediction</h1>
                <form onSubmit={handleSubmit} className="weather-form">
                    <label>
                        Enter City:
                        <input type="text" value={city} onChange={handleCityChange} required />
                    </label>
                    <label>
                        Enter Todays Date: { }
                        <input type="Date" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                {error && <p className="error">{error}</p>}
                {weather && (
                    <div className="weather-result">
                        <h2>Weather Forecast for {weather.location.name}, {weather.location.region}, {weather.location.country}</h2>
                        <p>Temperature: {weather.current.temp_c} °C || {weather.current.temp_f} °F</p>
                        <p>Condition: {weather.current.condition.text}</p>
                        <p>Humidity: {weather.current.humidity}</p>
                        <p>Wind Speed(kph): {weather.current.wind_kph}</p>
                        <p>Precipitation(mm): {weather.current.precip_mm}</p>
                        <p>Cloud: {weather.current.cloud}</p>
                        <img src={weather.current.condition.icon} alt="weather icon" />
                    </div>
                )}
            </div>
        </div >
    );
};

export default WeatherPrediction;



