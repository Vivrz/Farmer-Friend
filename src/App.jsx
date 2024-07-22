import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import SchemesPage from './SchemesPage.jsx';
import CropPrediction from './CropPrediction.jsx';
import WeatherPrediction from './weather.jsx';
import PestPrediction from './pestprediction.jsx'
import Register from './Register.jsx'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/government-schemes" element={<SchemesPage />} />
          <Route path="/crop-prediction" element={<CropPrediction />} />
          <Route path="/pest-prediction" element={<PestPrediction />} />
          <Route path="/weather-prediction" element={<WeatherPrediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

