import ArtworkForm from '../components/artworkForm';
import ArtworkCard from '../components/artworkCard';
import useArtworks from '../components/useArtworks';


const Admin = () => {
    const { artworks, selectedArtwork, setArtworks, setSelectedArtwork, deleteArtwork, updateArtwork} = useArtworks();

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


