import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './pages/map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import HeroSection from './components/hero';
import DescriptionSection from './components/descriptionSection';
import GallerySection from './components/gallery';
import Collections from './pages/collections';
import AboutUs from './pages/aboutUs';
import Abstract from './pages/abstract';
import Paintings from './pages/paintings';
import Sculpture from './pages/sculpture';
import Surrealism from './pages/surrealism';
import Admin from './pages/admin';
import ArtworkDetails from './pages/artworkDetails';
import useArtworks from './components/useArtworks';

function App() {

  const { artworks } = useArtworks();

  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <DescriptionSection />
                  <GallerySection />
                </>
              }
            />

            <Route
              path="/map"
              element={<Map />}
            />

            <Route
              path="/collections"
              element={<Collections />}
            />

            <Route
              path="/aboutUs"
              element={<AboutUs />}
            />

            <Route
              path="/abstract"
              element={<Abstract />}
            />

            <Route
              path="/paintings"
              element={<Paintings />}
            />

            <Route
              path="/sculpture"
              element={<Sculpture />}
            />

            <Route
              path="/surrealism"
              element={<Surrealism />}
            />

            <Route
              path="/admin"
              element={<Admin />}
            />

            <Route
              path="/artwork-details/:id"
              element={<ArtworkDetails artworks={artworks} />}
            />

          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;