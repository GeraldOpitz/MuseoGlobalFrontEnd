import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/detalleEstilo.css";

const ObraDetalle = ({ obras }) => {
  const { id } = useParams();

  const obra = obras.find((obra) => obra._id === id);

  if (!obra) {
    return <div>No se encontró la obra</div>;
  }

  return (
    <div className="container">
      <div className="border p-4">
        <h2>{obra.nombre}</h2>
        <p>Descripción: {obra.descripcion}</p>
        <p>Autor: {obra.autor}</p>
        <p>Fecha de creación: {obra.fechaCreacion}</p>
        <p>Pais de procedencia: {obra.paisProcedencia}</p>
        <p>Categoria: {obra.categoria}</p>

        <Link to={ '/'} className="btn btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default ObraDetalle;

  
