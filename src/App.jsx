// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import SchemesPage from './SchemesPage.jsx';
// import CropPrediction from './CropPrediction.jsx';
// import WeatherPrediction from './weather.jsx';
// import PestPrediction from './pestprediction.jsx'
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/government-schemes" element={<SchemesPage />} />
//           <Route path="/crop-prediction" element={<CropPrediction />} />
//           <Route path="/pest-prediction" element={<PestPrediction />} />
//           <Route path="/weather-prediction" element={<WeatherPrediction />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SchemesPage from './SchemesPage.jsx';
import CropPrediction from './CropPrediction.jsx';
import WeatherPrediction from './weather.jsx';
import PestPrediction from './pestprediction.jsx';
import Register from './Register.jsx';
import './App.css';
import Login2 from "./Login2.jsx"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login2 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/register" element={<Register />} />
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
