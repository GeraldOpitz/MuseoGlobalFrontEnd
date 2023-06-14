import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtworkForm from '../components/artworkForm';
import ArtworkCard from '../components/artworkCard';
import useArtworks from '../components/useArtworks';


const Admin = () => {
    const navigate = useNavigate();
    const { artworks, selectedArtwork, setArtworks, setSelectedArtwork, deleteArtwork, updateArtwork} = useArtworks();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        if (!isAdmin) {
          navigate('/access-denied');
        }
      }, [navigate]);

    return (
        <div className="admin-container">
            <div className="admin-form">
                <ArtworkForm
                    mode={selectedArtwork ? 'update' : 'create'}
                    setArtworks={setArtworks}
                    selectedArtwork={selectedArtwork}
                    setSelectedArtwork={setSelectedArtwork}
                />
            </div>
            <div className="container">
                <div className="row">
                    {artworks.map((artwork) => (
                        <ArtworkCard
                            key={artwork._id}
                            artwork={artwork}
                            deleteArtwork={deleteArtwork}
                            updateArtwork={updateArtwork}
                            imageUrl={artwork.imageUrl}
                            showButtons={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;


