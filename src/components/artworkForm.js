import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import "../styles/formStyle.css";

const artworkForm = ({ mode, setArtworks, selectedArtwork, setSelectedArtwork }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    if (selectedArtwork) {
      setName(selectedArtwork.name);
      setAuthor(selectedArtwork.author);
      setCreationDate(selectedArtwork.creationDate);
      setCountry(selectedArtwork.country);
      setCategory(selectedArtwork.category);
      setDescription(selectedArtwork.description);
      setPicture(selectedArtwork.picture);
    } else {
      setName('');
      setAuthor('');
      setCreationDate('');
      setCountry('');
      setCategory('');
      setDescription('');
      setPicture('');
    }
  }, [selectedArtwork]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === 'create') {
        await axios.post('http://localhost:3001/api/artworks/create', {
          name,
          author,
          creationDate,
          country,
          category,
          description,
          picture,
        });
      } else if (mode === 'update' && selectedArtwork) {
        await axios.put(`http://localhost:3001/api/artworks/${selectedArtwork._id}`, {
          name,
          author,
          creationDate,
          country,
          category,
          description,
          picture,
        });
        setSelectedArtwork(null);
      }

      setName('');
      setAuthor('');
      setCreationDate('');
      setCountry('');
      setCategory('');
      setDescription('');
      setPicture('');

      const response = await axios.get('http://localhost:3001/api/artworks');
      setArtworks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelar = () => {
    setSelectedArtwork(null);
  };

  artworkForm.propTypes = {
    mode: PropTypes.string.isRequired,
    setArtworks: PropTypes.func.isRequired,
    selectedArtwork: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
    setSelectedArtwork: PropTypes.func.isRequired,
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>{mode === 'create' ? 'Agregar obra' : 'Actualizar obra'}</h1>
      <div className="form-group">
        <label>
          name:
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          author:
          <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Fecha de creación:
          <input type="date" className="form-control" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          País de procedencia:
          <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Categoría:
          <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Descripción:
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          picture:
          <input type="text" className="form-control" value={picture} onChange={(e) => setPicture(e.target.value)} />
        </label>
      </div>
      <div className="buttons-container">
        <button type="submit" className="btn btn-primary">{mode === 'create' ? 'Guardar' : 'Actualizar'}</button>
        {mode === 'update' && (
          <button type="button" className="btn btn-primary" onClick={handleCancelar}>Cancelar</button>
        )}
      </div>
    </form>
  );
};

export default artworkForm;
