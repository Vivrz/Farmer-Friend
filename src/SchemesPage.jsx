import { useState } from 'react';
import './SchemesPage.css';
import img1 from "./assets/image1.jpg"
const initialSchemes = [
    {
        name: 'PM-KISAN Scheme',
        link: 'https://pmkisan.gov.in/'
    },
    {
        name: 'Pradhan Mantri Fasal Bima Yojana',
        link: 'https://pmfby.gov.in/'
    },
    {
        name: 'Soil Health Card Scheme',
        link: 'https://soilhealth.dac.gov.in/'
    },
    {
        name: 'Kisan Credit Card Scheme',
        link: 'https://www.pmkisan.gov.in/'
    }
];

const SchemesPage = () => {
    const [schemes, setSchemes] = useState(initialSchemes);
    const [newScheme, setNewScheme] = useState({ name: '', link: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewScheme({ ...newScheme, [name]: value });
    };

    const addScheme = (e) => {
        e.preventDefault();
        if (newScheme.name && newScheme.link) {
            setSchemes([...schemes, newScheme]);
            setNewScheme({ name: '', link: '' });
        }
    };

    const viewScheme = (scheme) => {
        window.open(scheme.link, '_blank');
    };

    return (
        <div className='abc' style={{
            backgroundImage: `url(${img1})`
        }}>
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
                    <button type="submit" className='add-scheme'>Add Scheme</button>
                </form>
                <div className="schemes-list">
                    {schemes.map((scheme, index) => (
                        <div key={index} className="scheme">
                            <p><span className="label">Name of Scheme:</span> {scheme.name}</p>
                            <p><span className="label">Scheme Link:</span> <a href={scheme.link} target="_blank" rel="noopener noreferrer">{scheme.link}</a></p>
                            <button onClick={() => viewScheme(scheme)} className="view-button">
                                View Scheme
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default SchemesPage;