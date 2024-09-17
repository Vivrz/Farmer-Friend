// // // /* eslint-disable no-unused-vars */
// // // // /* eslint-disable no-unused-vars */

import { Link, Navigate } from 'react-router-dom';
import img from "./assets/image.jpg";
import './Home.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from './util';
import { ToastContainer } from 'react-toastify';
const Home = () => {
    const [loggedInUser , setloggedInuser] = useState('');
    const navigate  = useNavigate(); 
    useEffect  (()=>{
        setloggedInuser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = (e)  => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess("User logged out!!");
        setTimeout(()=>{
            navigate('/Login');
        }, 1000)
    }
    return ( 
        <div className="home-container">
            <h1 className='G'>User : {loggedInUser}</h1>
            <button onClick={handleLogout} className='vivek'>Logout</button>
            <h1 className='J'>Welcome to Farmer Friend</h1>
            <div className="features-box">
                <h2>Features</h2>
                <nav className="home-nav">
                    <ul>
                        <li><Link to="/government-schemes">Government Schemes</Link></li>
                        <li><Link to="/crop-prediction">Crop Prediction</Link></li>
                        <li><Link to="/pest-prediction">Pest Prediction</Link></li>
                        <li><Link to="/weather-prediction">Weather Prediction</Link></li>
                        <li><a href="https://www.commodityonline.com/mandiprices" target="_blank" rel="noopener noreferrer">Market Price</a></li>
                    </ul>
                </nav>
            </div>
            <ToastContainer/>
        </div >
    );
}

export default Home;