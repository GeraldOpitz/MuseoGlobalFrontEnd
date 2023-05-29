import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/cardEstilo.css";

const ObraCard = ({ obra, eliminarObra, editarObra }) => {
  const handleEliminar = () => {
    eliminarObra(obra._id);
  };

  const handleEditar = () => {
    editarObra(obra);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={obra.foto} className="card-img-top" alt={obra.nombre} />
        <div className="card-body">
          <h5 className="card-title">{obra.nombre}</h5>
          <p className="card-text">{obra.descripcion}</p>
          <Link to={`/obra-detalle/${obra._id}`} className="btn btn-primary">Ver más</Link>
          <button className="btn btn-primary" onClick={handleEditar}>Actualizar</button>
          <button className="btn btn-primary" onClick={handleEliminar}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ObraCard;
