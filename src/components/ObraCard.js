import React from 'react';

const ObraCard = ({ obra, eliminarObra, editarObra }) => {
    const handleEliminar = () => {
        eliminarObra(obra.id);
    }

    const handleEditar = () => {
        editarObra(obra);
    };

    //Vista de card
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={'../images/noImage.jpg'} className="card-img-top" alt={obra.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{obra.nombre}</h5>
                    <p className="card-text">{obra.descripcion}</p>
                    <button className="btn btn-primary">Ver más</button>
                    <button className="btn btn-secondary" onClick={handleEditar}>Actualizar</button> {/* Agrega el botón actualizar */}
                    <button className="btn btn-primary" onClick={handleEliminar}>Eliminar</button> {/* Agrega el botón eliminar */}
                </div>
            </div>
        </div>
    );
};

export default ObraCard;
