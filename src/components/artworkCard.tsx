import React from 'react';
import { Link } from 'react-router-dom';
import { IArtwork } from '../types/interfaces';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import '../styles/cardStyle.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: '400px',
  },
  media: {
    height: 250,
  },
  buttonContainer: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '32%',
    height: '30%',
  },
  description: {
    maxHeight: '60px', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left', 
  },
  title: {
    textAlign: 'left', 
  },
});

interface ArtworkCardProps {
  artwork: IArtwork;
  deleteArtwork: (id: string) => void;
  updateArtwork: (artwork: IArtwork) => void;
  imageUrl?: string;
  showButtons?: boolean;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, deleteArtwork, updateArtwork, imageUrl, showButtons = false }) => {
  const classes = useStyles();

  const handleDelete = () => {
    deleteArtwork(artwork._id);
  };

  const handleUpdate = () => {
    updateArtwork(artwork);
  };

  return (
    <div className="col-md-4 mb-4">
      <Card className={classes.card}>
        {imageUrl && <CardMedia className={classes.media} image={imageUrl} title={artwork.name} />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title} noWrap>
            {artwork.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description} noWrap>
            {artwork.description}
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button component={Link} to={`/artwork-details/${artwork._id}`} variant="contained" color="primary" className={classes.button}>
              Ver más
            </Button>
            {showButtons && (
              <>
                <Button variant="contained" color="primary" onClick={handleUpdate} className={classes.button}>
                  Actualizar
                </Button>
                <Button variant="contained" color="primary" onClick={handleDelete} className={classes.button}>
                  Eliminar
                </Button>
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArtworkCard;
