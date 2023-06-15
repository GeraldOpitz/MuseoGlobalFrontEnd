import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useArtworks from '../components/useArtworks';
import ArtworkCard from '../components/artworkCard';
import PrivatePage from '../components/privatePage';

const useStyles = makeStyles((theme) => ({
  descriptionSection: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: theme.spacing(4),
  },
  sectionImage: {
    marginBottom: theme.spacing(2),
    width: '50%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  sectionText: {
    color: theme.palette.text.secondary,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
}));

const Abstract = () => {
  const classes = useStyles();
  const { artworks, deleteArtwork, updateArtwork } = useArtworks();
  const abstract = artworks.filter((artwork) => artwork.category === 'Abstracto');

  return (
    <PrivatePage>
    <div className={classes.descriptionSection}>
        <Typography variant="h4" className={classes.sectionTitle}>
          Abstracto
        </Typography>
      <div className="container">
        <div className="row">
          {abstract.map((artwork) => (
            <ArtworkCard
              key={artwork._id}
              artwork={artwork}
              deleteArtwork={deleteArtwork}
              updateArtwork={updateArtwork}
              imageUrl={artwork.imageUrl}
            />
          ))}
        </div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/map"
          className={classes.backButton}
        >
          Volver atrás
        </Button>
      </div>
    </div>
    </PrivatePage>
  );
};

export default Abstract;
