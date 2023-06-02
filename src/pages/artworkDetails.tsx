import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
}));

interface ArtworkDetailsProps {
  artworks: IArtwork[];
}

const ArtworkDetails: React.FC<ArtworkDetailsProps> = ({ artworks }) => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();

  const artwork = artworks.find((artwork) => artwork._id === id);

  if (!artwork) {
    return <div>No se encontró la obra</div>;
  }

  const creationDate = artwork.creationDate ? new Date(artwork.creationDate).toLocaleDateString() : '';

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
            <Typography variant="h2" gutterBottom>
              {artwork.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Descripción: {artwork.description}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Autor: {artwork.author}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fecha de creación: {creationDate}
            </Typography>
            <Typography variant="body1" gutterBottom>
              País de procedencia: {artwork.country}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Categoría: {artwork.category}
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
              Volver
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ArtworkDetails;
