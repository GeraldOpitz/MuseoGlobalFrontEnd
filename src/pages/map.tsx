
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, IconButton, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PrivatePage from '../components/privatePage';

const useStyles = makeStyles((theme) => ({
  mapSection: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  mapContainer: {
    marginTop: theme.spacing(4),
    
  },
  mapImage: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2), 
  },
  mapTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  mapText: {
    color: theme.palette.text.secondary,
  },
  mapIcon: {
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transform: 'scale(1.1)',
      padding: theme.spacing(2),
    },
  },
  mapBox: {
    backgroundImage: `url('/images/mapBackground.png')`,
    backgroundSize: 'cover',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    
  },
    '&:focus': {
    outline: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '& .MuiIconButton-label': {
    border: 'none',
  },
}));

const Map = () => {
  const classes = useStyles();

  return (
    <PrivatePage>
    <div className={classes.mapSection}>
      <Container maxWidth="md">
        <Grid container className={classes.mapContainer}>
          <Grid item xs={12}>
            <Box className={classes.mapBox}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <IconButton edge="start" className={classes.mapIcon} color="inherit" aria-label="menu" component={Link} to="/paintings">
                    <img className={classes.mapImage} src="/artworks/m1.png" alt="Imagen 1" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <IconButton edge="start" className={classes.mapIcon} color="inherit" aria-label="menu" component={Link} to="/sculpture">
                    <img className={classes.mapImage} src="/artworks/m2.png" alt="Imagen 2" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <IconButton edge="start" className={classes.mapIcon} color="inherit" aria-label="menu" component={Link} to="/surrealism">
                    <img className={classes.mapImage} src="/artworks/m3.png" alt="Imagen 3" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <IconButton edge="start" className={classes.mapIcon} color="inherit" aria-label="menu" component={Link} to="/abstract">
                    <img className={classes.mapImage} src="/artworks/m4.png" alt="Imagen 4" />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
    </PrivatePage>
  );
};

export default Map;
