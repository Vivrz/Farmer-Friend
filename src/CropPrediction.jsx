import { useState } from 'react';
import axios from 'axios';
import "./CropPrediction.css";
import img4 from "./assets/image4.jpg";

function CropPrediction() {
    const [city, setCity] = useState('');
    const [cropType, setCropType] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/Prediction', { city, cropType });
            setSuggestions(response.data.text);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions('Error fetching suggestions');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="abc" style={{
            backgroundImage: `url(${img4})`
        }}>
            <div className="Apps">
                <h1>Crop Prediction</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>City:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Crop Type:</label>
                        <select
                            value={cropType}
                            onChange={(e) => setCropType(e.target.value)}
                            required
                        >
                            <option value="">Select Crop Type</option>
                            <option value="all">All Crops</option>
                            <option value="kharif">Kharif</option>
                            <option value="rabi">Rabi</option>
                            <option value="perennial">Perennial (Whole Year)</option>
                            <option value="no-session">No Session</option>
                        </select>
                    </div>
                    <button type="submit">Predict Crops</button>
                </form>
                {loading && (
                    <div className="loading-wave">
                        <div className="loading-bar"></div>
                        <div className="loading-bar"></div>
                        <div className="loading-bar"></div>
                        <div className="loading-bar"></div>
                    </div>

                )}
                {suggestions && (
                    <div>
                        <h2>Suggestions</h2>
                        <p>{suggestions}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CropPrediction;
