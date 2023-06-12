import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'black',
  },
  navbarLogo: {
    marginRight: theme.spacing(2),
  },
  navbarLogoImage: {
    width: '70px', 
  },
  navbarText: {
    fontFamily: 'Cormorant Garamond, serif',
    color: 'white',
    padding: '20px',
    fontSize: '28px',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton edge="start" className={classes.navbarLogo} color="inherit" aria-label="menu" component={Link} to="/">
          <img className={classes.navbarLogoImage} src="/images/logo.png" alt="Logo" />
        </IconButton>
        <Typography component={Link} to="/map" variant="h6" className={classes.navbarText}>
          Mapa
        </Typography>
        <Typography component={Link} to="/collections" variant="h6" className={classes.navbarText}>
          Colección
        </Typography>
        <Typography component={Link} to="/aboutUs" variant="h6" className={classes.navbarText}>
          Sobre nosotros
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
