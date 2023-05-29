import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Formulario from './components/Formulario';
import ObraCard from './components/ObraCard';
import ObraDetalle from './pages/obraDetalle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [obras, setObras] = useState([]);
  const [obraSeleccionada, setObraSeleccionada] = useState(null);

  useEffect(() => {
    obtenerObras();
  }, []);

  const obtenerObras = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/artworks');
      setObras(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarObra = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/artworks/${id}`);
      setObras(obras.filter((obra) => obra._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const editarObra = (obra) => {
    setObraSeleccionada(obra);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Formulario
                  modo={obraSeleccionada ? 'actualizar' : 'crear'}
                  setObras={setObras}
                  obraSeleccionada={obraSeleccionada}
                  setObraSeleccionada={setObraSeleccionada}
                />

                <div className="container">
                  <h2>Obras</h2>
                  <div className="row">
                    {obras.map((obra) => (
                      <ObraCard
                        key={obra._id}
                        obra={obra}
                        eliminarObra={eliminarObra}
                        editarObra={editarObra}
                      />
                    ))}
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/obra-detalle/:id"
            element={<ObraDetalle obras={obras} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

