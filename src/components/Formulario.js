import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/formularioEstilo.css";

//Definir states
const Formulario = ({ modo, setObras, obraSeleccionada, setObraSeleccionada }) => {
  const [nombre, setNombre] = useState('');
  const [autor, setAutor] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [paisProcedencia, setPaisProcedencia] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState('');
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (id) {
      setContador(parseInt(id));
    }
  }, []);

  useEffect(() => {
    // Actualizar campos si hay una obra seleccionada
    if (obraSeleccionada) {
      setNombre(obraSeleccionada.nombre);
      setAutor(obraSeleccionada.autor);
      setFechaCreacion(obraSeleccionada.fechaCreacion);
      setPaisProcedencia(obraSeleccionada.paisProcedencia);
      setCategoria(obraSeleccionada.categoria);
      setDescripcion(obraSeleccionada.descripcion);
      setFoto(obraSeleccionada.foto);
    } else {
      // Limpiar campos si no hay una obra seleccionada
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

    //Solicitudes de post y put
    try {
      if (modo === 'crear') {
        const response = await axios.post('http://localhost:8080/api/obras', {
          id: contador,
          nombre,
          autor,
          fechaCreacion,
          paisProcedencia,
          categoria,
          descripcion,
          foto,
        });
        console.log(response.data);
        setContador((prev) => prev + 1);
        localStorage.setItem('id', contador + 1);
      } else if (modo === 'actualizar' && obraSeleccionada) {
        await axios.put(`http://localhost:8080/api/obras/${obraSeleccionada.id}`, {
          nombre,
          autor,
          fechaCreacion,
          paisProcedencia,
          categoria,
          descripcion,
          foto,
        });
        setObraSeleccionada(null); // Reinicia la obra seleccionada después de la actualización
      }

      setNombre('');
      setAutor('');
      setFechaCreacion('');
      setPaisProcedencia('');
      setCategoria('');
      setDescripcion('');
      setFoto('');

      //Actualiza la lista de obras
      const response = await axios.get('http://localhost:8080/api/obras');
      setObras(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Formulario
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
      <button type="submit" className="btn btn-primary">{modo === 'crear' ? 'Guardar' : 'Actualizar'}</button>
    </form>
  );
};

export default Formulario;
