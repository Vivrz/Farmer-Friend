// // // /* eslint-disable no-unused-vars */
// // // // /* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom';
import img from "./assets/image.jpg";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" style={{
            backgroundImage: `url(${img})`
        }}>
            <h1>Welcome to Farmer Friend</h1>
            <div className="features-box">
                <h2>Features</h2>
                <nav className="home-nav">
                    <ul>
                        {/* <li><Link to="/government-schemes">Government Schemes</Link></li> */}
                        <li><Link to="/crop-prediction">Crop Prediction</Link></li>
                        <li><Link to="/pest-prediction">Pest Prediction</Link></li>
                        <li><Link to="/weather-prediction">Weather Prediction</Link></li>
                        <li><a href="https://www.commodityonline.com/mandiprices" target="_blank" rel="noopener noreferrer">Market Price</a></li>
                    </ul>
                </nav>
            </div>
        </div >
    );
}

export default Home;