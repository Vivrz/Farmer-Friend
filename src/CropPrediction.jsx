

import { useState } from 'react';
import axios from 'axios';
import img4 from "./assets/image4.jpg";

function CropPrediction() {
    const [city, setCity] = useState('');
    const [cropType, setCropType] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/Prediction`, { city, cropType });
            setSuggestions(JSON.parse(response.data.text).points);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions(['Error fetching suggestions. Please try again.']);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-4"
            style={{ backgroundImage: `url(${img4})` }}
        >
            <div className="backdrop-blur-sm bg-black/30 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">AI Crop Prediction</h1>
                        <p className="text-blue-400 border rounded-full ">Get intelligent crop suggestions based on location and season</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">City Name</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-4 py-3 bg-white/90 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                                placeholder="Enter your city"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Crop Season</label>
                            <select
                                value={cropType}
                                onChange={(e) => setCropType(e.target.value)}
                                className="w-full px-4 py-3 bg-white/90 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                                required
                            >
                                <option value="">Select Crop Season</option>
                                <option value="all">All Crops</option>
                                <option value="kharif">Kharif (Monsoon)</option>
                                <option value="rabi">Rabi (Winter)</option>
                                <option value="perennial">Perennial (Whole Year)</option>
                                <option value="no-session">No Specific Season</option>
                            </select>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing Data...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                    </svg>
                                    Predict Optimal Crops
                                </>
                            )}
                        </button>
                    </form>
                    
                    {suggestions.length > 0 && (
                        <div className="mt-8 bg-white/90 rounded-xl p-6 shadow-lg">
                            <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                AI Recommendations
                            </h2>
                            <div className="space-y-3">
                                {suggestions.map((point, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-emerald-100 rounded-full p-1 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="ml-3 text-gray-700">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CropPrediction;