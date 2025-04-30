import { useState } from 'react';
import axios from 'axios';
import "./pestprediction.css";
import img2 from "./assets/image2.jpg";

function PestPrediction() {
    const [crop, setCrop] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/suggest', { crop });
            setSuggestions(JSON.parse(response.data.text).points);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions('Error fetching suggestions');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="abc" style={{
            backgroundImage: `url(${img2})`
        }}>
            <div className="Apps">
                <h1>Pest Prediction</h1>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Crop Disease :</label>
                        <select
                            value={crop}
                            onChange={(e) => setCrop(e.target.value)}
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
                    <button type="submit">Predict pest</button>
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
                        {suggestions.map((point, index) => {
                            return <p key={index}>{point}</p>;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PestPrediction;