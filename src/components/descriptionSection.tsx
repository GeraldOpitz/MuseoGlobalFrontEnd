import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  descriptionSection: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
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

const DescriptionSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.descriptionSection}>
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.sectionTitle}>
          Explora el museo
        </Typography>
        <Grid container spacing={4} className={classes.sectionContainer}>
          <Grid item xs={12} sm={4}>
            <img
              src="/images/1.png"
              alt="Imagen 1"
              className={classes.sectionImage}
            />
            <Typography variant="h5" className={classes.sectionTitle}>
              Mapa
            </Typography>
            <Typography variant="body1" className={classes.sectionText}>
              Descubre las maravillosas obras del museo a traves de una vista interactiva
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/images/2.png"
              alt="Imagen 2"
              className={classes.sectionImage}
            />
            <Typography variant="h5" className={classes.sectionTitle}>
              Colección
            </Typography>
            <Typography variant="body1" className={classes.sectionText}>
              Visita tus obras favoritas sin importar su categoria
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/images/3.png"
              alt="Imagen 3"
              className={classes.sectionImage}
            />
            <Typography variant="h5" className={classes.sectionTitle}>
              Aprende
            </Typography>
            <Typography variant="body1" className={classes.sectionText}>
              Consulta información sobre diversas obras de arte a medida que disfrutas de tu visita
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DescriptionSection;
