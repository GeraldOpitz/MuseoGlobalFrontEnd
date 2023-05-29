import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/cardStyle.css";

const artworkCard = ({ artwork, deleteArtwork, updateArtwork }) => {
  const handleDelete = () => {
    deleteArtwork(artwork._id);
  };

  const handleUpdate = () => {
    updateArtwork(artwork);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={artwork.picture} className="card-img-top" alt={artwork.name} />
        <div className="card-body">
          <h5 className="card-title">{artwork.name}</h5>
          <p className="card-text">{artwork.description}</p>
          <Link to={`/artwork-details/${artwork._id}`} className="btn btn-primary">Ver más</Link>
          <button className="btn btn-primary" onClick={handleUpdate}>Actualizar</button>
          <button className="btn btn-primary" onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default artworkCard;
