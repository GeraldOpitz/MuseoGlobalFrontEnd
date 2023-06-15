import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import PrivatePage from '../components/privatePage';

const useStyles = makeStyles((theme) => ({
  descriptionSection: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: 'black',
  },
  sectionText: {
    color: 'theme.palette.text.primary',
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
    fontSize: '1.2rem',
    lineHeight: '1.8',
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <PrivatePage>
    <div className={classes.descriptionSection}>
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.sectionTitle}>
          Sobre nosotros
        </Typography>
        <Typography variant="body1" className={classes.sectionText}>
          Bienvenido al Museo Global, un museo virtual que te permite explorar obras de arte de todo el mundo desde la comodidad de tu hogar. Nuestra misión es brindar acceso universal a la belleza y la diversidad del arte, sin importar las barreras geográficas.
        </Typography>
        <Typography variant="body1" className={classes.sectionText}>
          En el Museo Global, encontrarás una amplia colección de obras maestras de diferentes épocas y culturas. Desde pinturas icónicas hasta esculturas impresionantes, nuestro museo te invita a sumergirte en el mundo del arte y descubrir nuevas perspectivas.
        </Typography>
        <Typography variant="body1" className={classes.sectionText}>
          Nuestro equipo de expertos en arte trabaja arduamente para seleccionar y presentar las obras más destacadas. Además, contamos con funciones interactivas que te permiten explorar en detalle cada obra y disfrutar tu visita mediante un mapa interactivo.
        </Typography>
        <Typography variant="body1" className={classes.sectionText}>
          ¡Te invitamos a explorar el Museo Global y disfrutar de un viaje artístico sin fronteras! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros. ¡Gracias por visitarnos!
        </Typography>
      </Container>
    </div>
    </PrivatePage>
  );
};

export default AboutUs;

