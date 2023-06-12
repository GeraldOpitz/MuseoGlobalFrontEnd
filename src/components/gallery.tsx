import { makeStyles } from "@material-ui/core";
import { Container, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    gallerySection: {
        padding: theme.spacing(4),
        backgroundColor: 'black',
        textAlign: 'center',
    },
    galleryContainer: {
        marginTop: theme.spacing(2),
    },
    galleryImage: {
        marginBottom: theme.spacing(2),
        width: '100%',
        height: 'auto',
        borderRadius: theme.shape.borderRadius,
    },
    galleryTitle: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Libre Baskerville, serif',
    },
    galleryText: {
        color: theme.palette.text.secondary,
    },
}))

const GallerySection = () => {
    const classes = useStyles();

    return (
        <div className={classes.gallerySection}>
            <Container maxWidth="md">
                <Typography variant="h4" className={classes.galleryTitle}>
                    Maravillate con famosas obras de arte
                </Typography>
                <Grid container spacing={4} className={classes.galleryContainer}>
                    <Grid item sm={4}>
                        <img
                            src="/artworks/klimt.png"
                            alt="Imagen 1"
                            className={classes.galleryImage}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <img
                            src="/artworks/nocheEstrellada.png"
                            alt="Imagen 1"
                            className={classes.galleryImage}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <img
                            src="/artworks/venus.png"
                            alt="Imagen 1"
                            className={classes.galleryImage}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <img
                            src="/artworks/elGrito.png"
                            alt="Imagen 1"
                            className={classes.galleryImage}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <img
                            src="/artworks/sonOfMan.png"
                            alt="Imagen 1"
                            className={classes.galleryImage}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <img
                            src="/artworks/gioconda.png"
                            alt="Imagen 1"
                            className={classes.galleryImage}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default GallerySection;