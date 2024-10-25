import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ThesisListPage.css';

interface Thesis {
  id: number;
  title: string;
  author: string;
  year: number;
  pdf_url: string;
}

const ThesisListPage = () => {
  const [theses, setTheses] = useState<Thesis[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Función para obtener la lista de tesis desde el backend
  const fetchTheses = async () => {
    try {
      const response = await axios.get('/thesis', {
        params: {
          title: searchQuery,
          author: searchQuery,
          year: searchQuery,
        },
      });
      setTheses(response.data);
    } catch (error) {
      console.error('Error fetching theses:', error);
    }
  };

  // Llamar a la API al montar el componente y cuando cambie el searchQuery
  useEffect(() => {
    fetchTheses();
  }, [searchQuery]);

  return (
    <div className="container">
      <h1>Digital Thesis Repository</h1>
      <input
        type="text"
        placeholder="Search by title, author, or year..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <table className="thesis-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {theses.map((thesis) => (
            <tr key={thesis.id}>
              <td>{thesis.title}</td>
              <td>{thesis.author}</td>
              <td>{thesis.year}</td>
              <td>
                <a href={thesis.pdf_url} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/upload" className="upload-button">
        Upload Thesis
      </Link>
    </div>
  );
};

export default ThesisListPage;
