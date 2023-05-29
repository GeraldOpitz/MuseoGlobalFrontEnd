import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/formularioEstilo.css";

const Formulario = ({ modo, setObras, obraSeleccionada, setObraSeleccionada }) => {
  const [nombre, setNombre] = useState('');
  const [autor, setAutor] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [paisProcedencia, setPaisProcedencia] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    if (obraSeleccionada) {
      setNombre(obraSeleccionada.nombre);
      setAutor(obraSeleccionada.autor);
      setFechaCreacion(obraSeleccionada.fechaCreacion);
      setPaisProcedencia(obraSeleccionada.paisProcedencia);
      setCategoria(obraSeleccionada.categoria);
      setDescripcion(obraSeleccionada.descripcion);
      setFoto(obraSeleccionada.foto);
    } else {
      setNombre('');
      setAutor('');
      setFechaCreacion('');
      setPaisProcedencia('');
      setCategoria('');
      setDescripcion('');
      setFoto('');
    }
  }, [obraSeleccionada]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modo === 'crear') {
        await axios.post('http://localhost:3001/api/artworks/create', {
          nombre,
          autor,
          fechaCreacion,
          paisProcedencia,
          categoria,
          descripcion,
          foto,
        });
      } else if (modo === 'actualizar' && obraSeleccionada) {
        await axios.put(`http://localhost:3001/api/artworks/${obraSeleccionada._id}`, {
          nombre,
          autor,
          fechaCreacion,
          paisProcedencia,
          categoria,
          descripcion,
          foto,
        });
        setObraSeleccionada(null);
      }

      setNombre('');
      setAutor('');
      setFechaCreacion('');
      setPaisProcedencia('');
      setCategoria('');
      setDescripcion('');
      setFoto('');

      const response = await axios.get('http://localhost:3001/api/artworks');
      setObras(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelar = () => {
    setObraSeleccionada(null);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h1>{modo === 'crear' ? 'Agregar obra' : 'Actualizar obra'}</h1>
      <div className="form-group">
        <label>
          Nombre:
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Autor:
          <input type="text" className="form-control" value={autor} onChange={(e) => setAutor(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Fecha de creación:
          <input type="date" className="form-control" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          País de procedencia:
          <input type="text" className="form-control" value={paisProcedencia} onChange={(e) => setPaisProcedencia(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Categoría:
          <input type="text" className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Descripción:
          <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Foto:
          <input type="text" className="form-control" value={foto} onChange={(e) => setFoto(e.target.value)} />
        </label>
      </div>
      <div className="buttons-container">
        <button type="submit" className="btn btn-primary">{modo === 'crear' ? 'Guardar' : 'Actualizar'}</button>
        {modo === 'actualizar' && (
          <button type="button" className="btn btn-primary" onClick={handleCancelar}>Cancelar</button>
        )}
      </div>
    </form>
  );
};

export default Formulario;
