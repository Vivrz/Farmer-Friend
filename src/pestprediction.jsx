

import { useState } from 'react';
import axios from 'axios';
import img2 from "./assets/image2.jpg";

function PestPrediction() {
    const [crop, setCrop] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/suggest`, { crop });
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
            style={{ backgroundImage: `url(${img2})` }}
        >
            <div className="backdrop-blur-sm bg-gray-900/80 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-amber-200/20">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-amber-300 mb-2">Pest & Disease Prediction</h1>
                        <p className="text-amber-100">Identify potential threats to your crops and get prevention strategies</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-amber-100 text-sm font-medium mb-2">Select Crop Type</label>
                            <select
                                value={crop}
                                onChange={(e) => setCrop(e.target.value)}
                                className="w-full px-4 py-3 bg-white/90 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition border border-amber-300"
                                required
                            >
                                <option value="">Select Crop Type</option>
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
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing Crop Data...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                    </svg>
                                    Predict Pests & Diseases
                                </>
                            )}
                        </button>
                    </form>
                    
                    {suggestions.length > 0 && (
                        <div className="mt-8 bg-amber-50/95 rounded-xl p-6 shadow-lg border border-amber-200">
                            <h2 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Pest & Disease Analysis
                            </h2>
                            <div className="space-y-4">
                                {suggestions.map((point, index) => (
                                    <div key={index} className="flex items-start p-3 bg-white rounded-lg shadow-sm border-l-4 border-amber-500">
                                        <div className="flex-shrink-0">
                                            <div className="bg-amber-100 rounded-full p-1 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
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

export default PestPrediction;