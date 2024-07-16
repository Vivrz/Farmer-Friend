import { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        farmername: '',
        contact: '',
        Email: '',
        password: '',
        District: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2000/Farmer', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error registering farmer:', error);
        }
    };

    return (
        <div className="register-container">
            <h1>Register as Farmer</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="farmername"
                    placeholder="Farmer Name"
                    value={formData.farmername}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="District"
                    placeholder="District"
                    value={formData.District}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
