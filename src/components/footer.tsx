import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    color: 'white',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body2"  align="center">
          Todos los derechos reservados &copy; 2023
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
