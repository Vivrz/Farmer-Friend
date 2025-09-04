// import './weather.css';
// import { useState } from 'react';
// import img5 from "./assets/image5.jpg"
// const WeatherPrediction = () => {
//     const [city, setCity] = useState('');
//     const [weather, setWeather] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleCityChange = (event) => {
//         setCity(event.target.value);
//     };
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         setError(null);

//         const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': 'c87e69e730mshf1d05e978775d80p1ee103jsn33b1ff67f2e7',
//                 'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             if (!response.ok) {
//                 throw new Error('Error fetching the weather data');
//             }
//             const data = await response.json();
//             setWeather(data);
//         } catch (error) {
//             setError('Error fetching the weather data. Please try again.');
//             console.error('Error fetching the weather data:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="abc" style={{ backgroundImage: `url(${img5})` }}>
//             <div className="weather-container">
//                 <h1>Weather Prediction</h1>
//                 <form onSubmit={handleSubmit} className="weather-form">
//                     <label>
//                         Enter City:
//                         <input type="text" value={city} onChange={handleCityChange} required />
//                     </label>
//                     <label>
//                         Enter Todays Date: { }
//                         <input type="Date" />
//                     </label>
//                     <button type="submit">Submit</button>
//                 </form>
//                 {loading && (
//                     <div className="loading-wave">
//                         <div className="loading-bar"></div>
//                         <div className="loading-bar"></div>
//                         <div className="loading-bar"></div>
//                         <div className="loading-bar"></div>
//                     </div>

//                 )}
//                 {error && <p className="error">{error}</p>}
//                 {weather && (
//                     <div className="weather-result">
//                         <h2>Weather Forecast for {weather.location.name}, {weather.location.region}, {weather.location.country}</h2>
//                         <p>Temperature: {weather.current.temp_c} °C || {weather.current.temp_f} °F</p>
//                         <p>Condition: {weather.current.condition.text}</p>
//                         <p>Humidity: {weather.current.humidity}</p>
//                         <p>Wind Speed(kph): {weather.current.wind_kph}</p>
//                         <p>Precipitation(mm): {weather.current.precip_mm}</p>
//                         <p>Cloud: {weather.current.cloud}</p>
//                         <img src={weather.current.condition.icon} alt="weather icon" />
//                     </div>
//                 )}
//             </div>
//         </div >
//     );
// };

// export default WeatherPrediction;

import { useState } from 'react';
import img5 from "./assets/image5.jpg"

const WeatherPrediction = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-4"
            style={{ backgroundImage: `url(${img5})` }}
        >
            <div className="backdrop-blur-sm bg-blue-900/80 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">Weather Prediction</h1>
                        <p className="text-blue-100">Get accurate weather forecasts for any location</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Search by country name</label>
                            <input 
                                type="text" 
                                value={city} 
                                onChange={handleCityChange} 
                                className="w-full px-4 py-3 bg-white/90 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                placeholder="Enter city or country name"
                                required 
                            />
                        </div>
                        
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-white text-sm font-medium mb-2">Enter Today's Date</label>
                                <input 
                                    type="date" 
                                    className="w-full px-4 py-3 bg-white/90 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                />
                            </div>
                            <div className="flex items-end">
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg flex items-center"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Loading...
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                            Search
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                    
                    {error && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                            <p>{error}</p>
                        </div>
                    )}
                    
                    {weather && (
                        <div className="bg-white/90 rounded-xl p-6 shadow-lg">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">{weather.location.name}, {weather.location.country}</h2>
                                <p className="text-gray-600">{weather.location.region}</p>
                            </div>
                            
                            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                                <div className="text-center md:text-left mb-4 md:mb-0">
                                    <div className="text-5xl font-bold text-gray-800">{weather.current.temp_c} °C</div>
                                    <div className="text-lg text-gray-600">{weather.current.condition.text}</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img src={weather.current.condition.icon} alt="Weather icon" className="w-24 h-24" />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <div className="text-sm text-blue-600 font-medium mb-1">Wind</div>
                                    <div className="text-xl font-bold text-gray-800">{weather.current.wind_kph} km/h</div>
                                    <div className="text-xs text-gray-500">{weather.current.wind_mph} Mph</div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <div className="text-sm text-blue-600 font-medium mb-1">Humidity</div>
                                    <div className="text-xl font-bold text-gray-800">{weather.current.humidity}%</div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">Location Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Population:</span>
                                        <span className="font-medium">67,215,293</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Capital:</span>
                                        <span className="font-medium">London</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Precipitation:</span>
                                        <span className="font-medium">{weather.current.precip_mm} mm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Cloud Cover:</span>
                                        <span className="font-medium">{weather.current.cloud}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeatherPrediction;