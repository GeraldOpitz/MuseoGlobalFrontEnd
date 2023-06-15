import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
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
}));

const Collections = () => {
  const classes = useStyles();
  const { artworks, deleteArtwork, updateArtwork } = useArtworks();

  return (
    <PrivatePage>
    <div className={classes.descriptionSection}>
      <Typography variant="h4" className={classes.sectionTitle}>
        Colección
      </Typography>
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
    </div>
    </PrivatePage>
  );
};

export default Collections;
