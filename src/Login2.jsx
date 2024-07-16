// import { useState } from 'react';
// import axios from 'axios';
// import './Login2.css';

// const Login2 = () => {
//     const [formData, setFormData] = useState({ Email: '', password: '' });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:2000/Farmer', formData);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error logging in:', error);
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Login as Farmer</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="Email"
//                     placeholder="Email"
//                     value={formData.Email}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login2;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login2.css';

const Login2 = () => {
    const [formData, setFormData] = useState({ Email: '', password: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2000/login', formData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/Home'); // Redirect to Home
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-container">
            <h1>Login as Farmer</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login2;

