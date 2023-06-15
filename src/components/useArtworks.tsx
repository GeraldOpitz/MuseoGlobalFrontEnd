import { useState, useEffect } from 'react';
import axios from 'axios';
import { IArtwork } from '../types/interfaces';

const useArtworks = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<IArtwork | null>(null);

  useEffect(() => {
    getArtworks();
  },);

  const getArtworks = async () => {
    try {
      const response = await axios.get<IArtwork[]>("https://museoglobalbackend.onrender.com/api/artworks");
      setArtworks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArtwork = async (id: string) => {
    try {
      await axios.delete(`https://museoglobalbackend.onrender.com/api/artworks/${id}`);
      setArtworks((prevArtworks) => prevArtworks.filter((artwork) => artwork._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateArtwork = (artwork: IArtwork) => {
    setSelectedArtwork(artwork);
  };

  return {
    artworks,
    selectedArtwork,
    setArtworks,
    setSelectedArtwork,
    deleteArtwork,
    updateArtwork,
    getArtworks
  };
};

export default useArtworks;