import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';


const images = [
  '/images/fondo1.jfif',
  '/images/fondo2.png',
  '/images/fondo3.jpg',
];

const useStyles = makeStyles((theme) => ({
  heroSection: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

  },
  subtitle: {
    fontSize: '24px',
    marginBottom: theme.spacing(4),
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

  },
  button: {
    fontSize: '20px',
    padding: theme.spacing(1, 4),
    color: '#FFFFFF',
    backgroundColor: 'black',

  },
}));

const HeroSection = () => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <Box
      className={classes.heroSection}
      style={{ backgroundImage: `url("${currentImage}")` }}
    >
      <Typography variant="h1" className={classes.title}>
        Bienvenidos al Museo global
      </Typography>
      <Typography variant="h3" className={classes.subtitle}>
        Explora nuestra colección de arte de todo el mundo
      </Typography>
      <Button component={Link} to="/map" variant="contained" color="primary" className={classes.button}>
        Ir al mapa
      </Button>
    </Box>
  );
};

export default HeroSection;
