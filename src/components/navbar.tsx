import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
    color: 'white',
    padding: '20px',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton edge="start" className={classes.navbarLogo} color="inherit" aria-label="menu">
          <img className={classes.navbarLogoImage} src="/images/logo.png" alt="Logo" />
        </IconButton>
        <Typography variant="h6" className={classes.navbarText}>
          Mapa
        </Typography>
        <Typography variant="h6" className={classes.navbarText}>
          Colecciones
        </Typography>
        <Typography variant="h6" className={classes.navbarText}>
          Sobre nosotros
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
