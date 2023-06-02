import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ArtworkForm from './components/artworkForm';
import ArtworkCard from './components/artworkCard';
import ArtworkDetails from './pages/artworkDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IArtwork } from './types/interfaces';
import Layout from './components/layout';

function App() {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<IArtwork | null>(null);

  useEffect(() => {
    getArtworks();
  }, []);

  const getArtworks = async () => {
    try {
      const response = await axios.get<IArtwork[]>('http://localhost:3001/api/artworks');
      console.log(response.data); // Verificar la respuesta en la consola
      setArtworks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArtwork = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/artworks/${id}`);
      setArtworks(artworks.filter((artwork) => artwork._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateArtwork = (artwork: IArtwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <Layout>
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
                  <div className="row">
                    {artworks.map((artwork) => (
                      <ArtworkCard
                        key={artwork._id}
                        artwork={artwork}
                        deleteArtwork={deleteArtwork}
                        updateArtwork={updateArtwork}
                        imageUrl={artwork.imageUrl}
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
    </Layout>
  );
}

export default App;