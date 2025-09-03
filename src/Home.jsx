import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        toast.success('Logged out successfully!');
        setTimeout(() => {
            window.location.href = '/Login';
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-farm-green-50 via-white to-earth-brown-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-farm-green-400 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-earth-brown-400 rounded-full"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-farm-green-300 rounded-full"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-farm-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">🌾</span>
                    </div>
                    <h1 className="text-2xl font-bold text-farm-green-800">Farmer Friend</h1>
                </div>
                
                <div className="flex items-center space-x-4">
                    <div className="bg-farm-green-100 px-4 py-2 rounded-lg border-2 border-farm-green-300">
                        <span className="text-farm-green-800 font-semibold">Welcome, {loggedInUser}</span>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="btn-secondary"
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-farm-green-800 mb-6 leading-tight">
                        Welcome to <span className="text-earth-brown-600">Farmer Friend</span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Your comprehensive agricultural companion for modern farming solutions, 
                        crop management, and sustainable agriculture practices.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Link to="/government-schemes" className="group">
                        <div className="card-agricultural group-hover:bg-farm-green-50">
                            <div className="text-4xl mb-4">🏛️</div>
                            <h3 className="text-2xl font-bold text-farm-green-800 mb-3">Government Schemes</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Discover and access various government agricultural schemes and subsidies available for farmers.
                            </p>
                        </div>
                    </Link>

                    <Link to="/crop-prediction" className="group">
                        <div className="card-agricultural group-hover:bg-farm-green-50">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-2xl font-bold text-farm-green-800 mb-3">Crop Prediction</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get AI-powered recommendations for the best crops to grow based on your soil and climate conditions.
                            </p>
                        </div>
                    </Link>

                    <Link to="/pest-prediction" className="group">
                        <div className="card-agricultural group-hover:bg-farm-green-50">
                            <div className="text-4xl mb-4">🐛</div>
                            <h3 className="text-2xl font-bold text-farm-green-800 mb-3">Pest Prediction</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Identify and prevent pest infestations with our advanced pest detection and management system.
                            </p>
                        </div>
                    </Link>

                    <Link to="/weather-prediction" className="group">
                        <div className="card-agricultural group-hover:bg-farm-green-50">
                            <div className="text-4xl mb-4">🌤️</div>
                            <h3 className="text-2xl font-bold text-farm-green-800 mb-3">Weather Prediction</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Stay ahead with accurate weather forecasts and agricultural weather insights for better planning.
                            </p>
                        </div>
                    </Link>

                    <a 
                        href="https://www.commodityonline.com/mandiprices" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="card-agricultural group-hover:bg-farm-green-50">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-2xl font-bold text-farm-green-800 mb-3">Market Prices</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get real-time market prices and trends to make informed decisions about selling your crops.
                            </p>
                        </div>
                    </a>

                    <div className="card-agricultural bg-gradient-to-br from-farm-green-100 to-earth-brown-100">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-2xl font-bold text-farm-green-800 mb-3">Smart Farming</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Embrace technology-driven agriculture with our comprehensive suite of farming tools and insights.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-farm-green-600 to-earth-brown-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
                        <p className="text-xl mb-6 opacity-90">
                            Join thousands of farmers who are already using our platform to increase their productivity and profits.
                        </p>
                        <button className="bg-white text-farm-green-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </main>

            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default Home;
