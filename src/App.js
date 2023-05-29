import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ArtworkForm from './components/artworkForm';
import ArtworkCard from './components/artworkCard';
import ArtworkDetails from './pages/artworkDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [artworks, setArtworks] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    getArtworks();
  }, []);

  const getArtworks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/artworks');
      setArtworks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArtwork = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/artworks/${id}`);
      setArtworks(artworks.filter((artwork) => artwork._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateArtwork = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ArtworkForm
                  mode={selectedArtwork ? 'update' : 'create'}
                  setArtworks={setArtworks}
                  selectedArtwork={selectedArtwork}
                  setSelectedArtwork={setSelectedArtwork}
                />

                <div className="container">
                  <h2>Obras</h2>
                  <div className="row">
                    {artworks.map((artwork) => (
                      <ArtworkCard
                        key={artwork._id}
                        artwork={artwork}
                        deleteArtwork={deleteArtwork}
                        updateArtwork={updateArtwork}
                      />
                    ))}
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/artwork-details/:id"
            element={<ArtworkDetails artworks={artworks} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

