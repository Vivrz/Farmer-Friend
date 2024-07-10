/* eslint-disable no-unused-vars */
import './CropPrediction.css';
import { useState } from 'react';

function App() {
    const [city, setCity] = useState('');
    const [cropType, setCropType] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleCropTypeChange = (e) => {
        setCropType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`city: ${city}, CropType: ${cropType}`);
    };

    return (
        <div className="App">
            <h1>Crop Prediction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    City:
                    <input type="text" value={city} onChange={handleCityChange} />
                </label>
                <br />
                <label>
                    Predict:
                    <select value={cropType} onChange={handleCropTypeChange}>
                        <option value="">Select Crop Type</option>
                        <option value="all">All Crops</option>
                        <option value="kharif">Kharif</option>
                        <option value="rabi">Rabi</option>
                        <option value="perennial">Perennial (Whole Year)</option>
                        <option value="no-session">No Session</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;