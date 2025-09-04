import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        toast.success('Logged out successfully!');
        setTimeout(() => {
            navigate("/Login");
        }, 2000);
    };

        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-20"></div>
                    <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-100 rounded-full opacity-20"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-200 rounded-full opacity-10"></div>
                </div>

                {/* Header */}
                <header className="relative z-10 flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm shadow-sm border-b border-green-100">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-md">
                            <span className="text-white text-xl">🌾</span>
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                            Farmer Friend
                        </h1>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-200 shadow-sm">
                            <span className="text-green-800 font-medium">Welcome, {loggedInUser}</span>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="px-4 py-2 border border-red-30 text-white bg-red-500 rounded-xl font-medium text-w hover:bg-red-600 transition-colors duration-200 shadow-sm"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="relative z-10 container mx-auto px-6 py-12">
                    {/* Hero Section */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Welcome to <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">Farmer Friend</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                            Your comprehensive agricultural companion for modern farming solutions, 
                            crop management, and sustainable agriculture practices.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-amber-400 mx-auto rounded-full"></div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Government Schemes Card */}
                        <Link to="/government-schemes" className="group">
                            <div className="h-full bg-white hover:bg-green-200 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-green-200 group-hover:-translate-y-1">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors duration-300">
                                    <span className="text-2xl">🏛️</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Government Schemes</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Discover and access various government agricultural schemes and subsidies available for farmers.
                                </p>
                                <div className="mt-4 text-green-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                    Explore now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Crop Prediction Card */}
                        <Link to="/crop-prediction" className="group">
                            <div className="h-full bg-white hover:bg-green-200 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-green-200 group-hover:-translate-y-1">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors duration-300">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Crop Prediction</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Get AI-powered recommendations for the best crops to grow based on your soil and climate conditions.
                                </p>
                                <div className="mt-4 text-green-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                    Explore now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Pest Prediction Card */}
                        <Link to="/pest-prediction" className="group">
                            <div className="h-full bg-white hover:bg-green-200 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-green-200 group-hover:-translate-y-1">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors duration-300">
                                    <span className="text-2xl">🐛</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pest Prediction</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Identify and prevent pest infestations with our advanced pest detection and management system.
                                </p>
                                <div className="mt-4 text-green-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                    Explore now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Weather Prediction Card */}
                        <Link to="/weather-prediction" className="group">
                            <div className="h-full bg-white hover:bg-green-200 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-green-200 group-hover:-translate-y-1">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors duration-300">
                                    <span className="text-2xl">🌤️</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Prediction</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Stay ahead with accurate weather forecasts and agricultural weather insights for better planning.
                                </p>
                                <div className="mt-4 text-green-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                    Explore now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Market Prices Card */}
                        <a 
                            href="https://www.commodityonline.com/mandiprices" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="h-full bg-white rounded-2xl hover:bg-green-200 p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-green-200 group-hover:-translate-y-1">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors duration-300">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Prices</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Get real-time market prices and trends to make informed decisions about selling your crops.
                                </p>
                                <div className="mt-4 text-green-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                    Explore now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>
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