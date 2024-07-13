const WeatherPrediction = () => {
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const apiKey = 'c87e69e730mshf1d05e978775d80p1ee103jsn33b1ff67f2e7';
    const apiUrl = 'https://weather-api-by-any-city.p.rapidapi.com/weather/';

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const url = `${apiUrl}${city}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // assuming API returns JSON
            setWeatherData(result);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="weather-prediction-container">
            <form onSubmit={handleFormSubmit}>
                <label>
                    Enter City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                </label>
                <button type="submit">Predict Weather</button>
            </form>
            {weatherData && (
                <div className="weather-results">
                    {/* Display weather data as per your UI design */}
                    <h2>Weather Prediction Results</h2>
                    <p>City: {weatherData.city}</p>
                    {/* Display more weather details */}
                    {/* Example: <p>Temperature: {weatherData.temperature}</p> */}
                </div>
            )}
        </div>
    );
};

export default WeatherPrediction;
