// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './SchemesPage.css';
// import { Link } from "react-router-dom"

// const SchemesPage = () => {
//     const [schemes, setSchemes] = useState([]);
//     const [newScheme, setNewScheme] = useState({ name: '', link: '' });

//     useEffect(() => {
//         const fetchSchemes = async () => {
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_API_URL}/FetchScheme`);
//                 setSchemes(response.data);
//             } catch (error) {
//                 console.error("Error fetching schemes:", error);
//             }
//         };

//         fetchSchemes();
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewScheme({ ...newScheme, [name]: value });
//     };
//     const addScheme = async (e) => {
//         e.preventDefault();
//         console.log(newScheme);
//         if (newScheme) {
//             try {
//                 const response = await axios.post(`${import.meta.env.VITE_API_URL}/AddScheme`, newScheme);
//                 setSchemes([...schemes, response.data]);
//                 setNewScheme({ name: '', link: '' });
//             } catch (error) {
//                 console.error("Error adding scheme:", error);
//             }
//         }
//     };
//     const deleteScheme = async (schemename) => {
//         try {
//             await axios.delete(`${import.meta.env.VITE_API_URL}/deleteScheme`, { data: { schemename } });
//             setSchemes(schemes.filter(scheme => scheme.schemename !== schemename));
//         } catch (error) {
//             console.error("Error deleting scheme:", error);
//         }
//     };


//     const viewScheme = (scheme) => {
//         window.open(scheme.link, '_blank');
//     };


//     return (
//         <div className="Hello">
//         <div className="schemes-container">
//             <h1>Government Schemes</h1>
//             <form className="add-scheme-form" onSubmit={addScheme}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Scheme Name"
//                     value={newScheme.name}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="url"
//                     name="link"
//                     placeholder="Scheme Link"
//                     value={newScheme.link}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <button type="submit" className="add-scheme">Add Scheme</button>
//             </form>
//             <div className="schemes-list">
//                 {schemes && schemes.map((scheme, index) => (
//                     <div key={index} className="scheme">
//                         <p><span className="label">Name of Scheme:</span> {scheme.schemename}</p>
//                         <p><span className="label">Scheme Link:</span> <a href={scheme.schemeLink} target="_blank" rel="noopener noreferrer">{scheme.schemeLink}</a></p>
//                         <a href={scheme.schemeLink} className="view-button">
//                             View Scheme
//                         </a>
//                         <button onClick={() => deleteScheme(scheme.schemename)} className="delete-button">
//                             Delete Scheme
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </div>
//     );

// };

// export default SchemesPage;


/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
          Government Schemes
        </h1>

        {/* Add Scheme Form */}
        <form 
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4 mb-12 border border-gray-100"
          onSubmit={addScheme}
        >
          <input
            type="text"
            name="name"
            placeholder="Scheme Name"
            value={newScheme.name}
            onChange={handleInputChange}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="url"
            name="link"
            placeholder="Scheme Link"
            value={newScheme.link}
            onChange={handleInputChange}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <button 
            type="submit" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            Add Scheme
          </button>
        </form>

        {/* Schemes List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes && schemes.map((scheme, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <p className="text-lg font-semibold text-green-700 mb-2">
                {scheme.schemename}
              </p>
              <a 
                href={scheme.schemeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline block mb-4 truncate"
              >
                {scheme.schemeLink}
              </a>
              
              <div className="flex justify-between">
                <a 
                  href={scheme.schemeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                >
                  View
                </a>
                <button 
                  onClick={() => deleteScheme(scheme.schemename)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchemesPage;
