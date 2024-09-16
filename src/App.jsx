import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home.jsx';
import SchemesPage from './SchemesPage.jsx';
import CropPrediction from './CropPrediction.jsx';
import WeatherPrediction from './weather.jsx';
import PestPrediction from './pestprediction.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element = {<Navigate to="/Login"/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Signup' element = {<Signup/>}/>
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

