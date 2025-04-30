/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SchemesPage.css';
import { Link } from "react-router-dom"

const SchemesPage = () => {
    const [schemes, setSchemes] = useState([]);
    const [newScheme, setNewScheme] = useState({ name: '', link: '' });

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/FetchScheme`);
                setSchemes(response.data);
            } catch (error) {
                console.error("Error fetching schemes:", error);
            }
        };

        fetchSchemes();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewScheme({ ...newScheme, [name]: value });
    };
    const addScheme = async (e) => {
        e.preventDefault();
        console.log(newScheme);
        if (newScheme) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/AddScheme`, newScheme);
                setSchemes([...schemes, response.data]);
                setNewScheme({ name: '', link: '' });
            } catch (error) {
                console.error("Error adding scheme:", error);
            }
        }
    };
    const deleteScheme = async (schemename) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/deleteScheme`, { data: { schemename } });
            setSchemes(schemes.filter(scheme => scheme.schemename !== schemename));
        } catch (error) {
            console.error("Error deleting scheme:", error);
        }
    };


    const viewScheme = (scheme) => {
        window.open(scheme.link, '_blank');
    };


    return (
        <div className="Hello">
        <div className="schemes-container">
            <h1>Government Schemes</h1>
            <form className="add-scheme-form" onSubmit={addScheme}>
                <input
                    type="text"
                    name="name"
                    placeholder="Scheme Name"
                    value={newScheme.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="url"
                    name="link"
                    placeholder="Scheme Link"
                    value={newScheme.link}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" className="add-scheme">Add Scheme</button>
            </form>
            <div className="schemes-list">
                {schemes && schemes.map((scheme, index) => (
                    <div key={index} className="scheme">
                        <p><span className="label">Name of Scheme:</span> {scheme.schemename}</p>
                        <p><span className="label">Scheme Link:</span> <a href={scheme.schemeLink} target="_blank" rel="noopener noreferrer">{scheme.schemeLink}</a></p>
                        <a href={scheme.schemeLink} className="view-button">
                            View Scheme
                        </a>
                        <button onClick={() => deleteScheme(scheme.schemename)} className="delete-button">
                            Delete Scheme
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );

};

export default SchemesPage;


