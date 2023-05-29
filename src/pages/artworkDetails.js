import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/detailsStyle.css";

const artworkDetails = ({ artworks }) => {
  const { id } = useParams();

  const artwork = artworks.find((artwork) => artwork._id === id);

  if (!artwork) {
    return <div>No se encontró la obra</div>;
  }

  return (
    <div className="container">
      <div className="border p-4">
        <h2>{artwork.name}</h2>
        <p>Descripción: {artwork.description}</p>
        <p>Autor: {artwork.author}</p>
        <p>Fecha de creación: {artwork.creationDate}</p>
        <p>Pais de procedencia: {artwork.country}</p>
        <p>Categoria: {artwork.category}</p>

        <Link to={ '/'} className="btn btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default artworkDetails;

  
