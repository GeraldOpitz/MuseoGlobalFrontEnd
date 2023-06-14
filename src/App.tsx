import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './pages/map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import Collections from './pages/collections';
import AboutUs from './pages/aboutUs';
import Abstract from './pages/abstract';
import Paintings from './pages/paintings';
import Sculpture from './pages/sculpture';
import Surrealism from './pages/surrealism';
import Admin from './pages/admin';
import ArtworkDetails from './pages/artworkDetails';
import useArtworks from './components/useArtworks';
import Login from './pages/Login';
import HomePage from './pages/homepage';

function App() {
  const { artworks } = useArtworks();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/homepage" element={<Layout><HomePage /></Layout>} />
        <Route path="/map" element={<Layout><Map /></Layout>} />
        <Route path="/collections" element={<Layout><Collections /></Layout>} />
        <Route path="/aboutUs" element={<Layout><AboutUs /></Layout>} />
        <Route path="/abstract" element={<Layout><Abstract /></Layout>} />
        <Route path="/paintings" element={<Layout><Paintings /></Layout>} />
        <Route path="/sculpture" element={<Layout><Sculpture /></Layout>} />
        <Route path="/surrealism" element={<Layout><Surrealism /></Layout>} />
        <Route path="/admin" element={<Layout><Admin /></Layout>} />
        <Route
          path="/artwork-details/:id"
          element={<Layout><ArtworkDetails artworks={artworks} /></Layout>}
        />
      </Routes>
    </Router>
  );
}

export default App;
