import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IArtwork } from '../types/interfaces';
import { Typography, Button, Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/detailsStyle.css';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  mediaContainer: {
    height: '500px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  detailsTitle: {
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: '60px',
  },
  detailsText: {
    fontFamily: 'Cormorant Garamond, serif',
    padding: '20px',
    fontSize: '25px',
  }
}));

interface ArtworkDetailsProps {
  artworks: IArtwork[];
}

const ArtworkDetails: React.FC<ArtworkDetailsProps> = ({ artworks }) => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const artwork = artworks.find((artwork) => artwork._id === id);
    if (artwork) {
      setIsDataLoaded(true);
    }
  }, [id, artworks]);

  if (!isDataLoaded) {
    return <div>Cargando...</div>;
  }

  const artwork = artworks.find((artwork) => artwork._id === id);

  if (!artwork) {
    return <div>No se encontró la obra</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <div className={classes.mediaContainer}>
              <img className={classes.media} src={artwork.imageUrl} alt={artwork.name} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" className={classes.detailsTitle} gutterBottom>
              {artwork.name}
            </Typography>
            <Typography variant="body1" className={classes.detailsText} gutterBottom>
              Descripción: {artwork.description}
            </Typography>
            <Typography variant="body1" className={classes.detailsText} gutterBottom>
              Autor: {artwork.author}
            </Typography>
            <Typography variant="body1" className={classes.detailsText} gutterBottom>
              Fecha de creación: {artwork.creationDate}
            </Typography>
            <Typography variant="body1" className={classes.detailsText} gutterBottom>
              País de procedencia: {artwork.country}
            </Typography>
            <Typography variant="body1" className={classes.detailsText} gutterBottom>
              Categoría: {artwork.category}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoBack}>
              Volver
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ArtworkDetails;
