import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography, Paper, Box, MenuItem, Select, FormControl } from '@material-ui/core';
import { IArtwork } from '../types/interfaces';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  paper: {
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  outerBox: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

interface ArtworkFormProps {
  mode: string;
  setArtworks: React.Dispatch<React.SetStateAction<IArtwork[]>>;
  selectedArtwork: IArtwork | null;
  setSelectedArtwork: React.Dispatch<React.SetStateAction<IArtwork | null>>;
}

const ArtworkForm: React.FC<ArtworkFormProps> = ({
  mode,
  setArtworks,
  selectedArtwork,
  setSelectedArtwork,

}: ArtworkFormProps) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [creationDate, setCreationDate] = useState<number | undefined>(undefined);
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);



  useEffect(() => {
    if (selectedArtwork) {
      setName(selectedArtwork.name);
      setAuthor(selectedArtwork.author);
      setCreationDate(selectedArtwork.creationDate);
      setCountry(selectedArtwork.country);
      setCategory(selectedArtwork.category);
      setDescription(selectedArtwork.description);
    } else {
      setName('');
      setAuthor('');
      setCreationDate(undefined);
      setCountry('');
      setCategory('');
      setDescription('');
    }
  }, [selectedArtwork]);

  const handleUploadImage = async (): Promise<string | undefined> => {
    if (!image) {
      return undefined;
    }

    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('http://localhost:3001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });


      const imageUrl = response.data.imageUrl;

      return imageUrl;
    } catch (error) {
      console.error(error);
      console.log('Ha ocurrido un error al subir la imagen')
      return undefined;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageUrl = await handleUploadImage();

    try {
      const artworkData = {
        name,
        author,
        creationDate,
        country,
        category,
        description,
        imageUrl,
      };

      if (mode === 'create') {
        await axios.post('http://localhost:3001/api/artworks/create', artworkData);
      } else if (mode === 'update' && selectedArtwork) {
        await axios.put(`http://localhost:3001/api/artworks/${selectedArtwork._id}`, artworkData);
        setSelectedArtwork(null);
      }

      setName('');
      setAuthor('');
      setCreationDate(undefined);
      setCountry('');
      setCategory('');
      setDescription('');
      setImage(null);

      const response = await axios.get('http://localhost:3001/api/artworks');
      setArtworks(response.data);
    } catch (error) {
      console.error(error);
      console.log('Error al crear formulario');
    }
  };

  const handleCancelar = () => {
    setSelectedArtwork(null);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Box display="flex" justifyContent="center" className={classes.outerBox}>
      <Box width={400}>
        <Paper elevation={3} className={classes.paper}>
          <Box p={3}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <Typography variant="h5" align="center" gutterBottom>
                {mode === 'create' ? 'Agregar obra' : 'Actualizar obra'}
              </Typography>
              <Typography variant="body1" className={classes.label}>
                Nombre
              </Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              <Typography variant="body1" className={classes.label}>
                Autor
              </Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                value={author}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
              />
              <Typography variant="body1" className={classes.label}>
                Fecha de creación
              </Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                value={creationDate || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCreationDate(Number(e.target.value))
                }
              />
              <Typography variant="body1" className={classes.label}>
                País de origen
              </Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                value={country}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
              />
              <FormControl variant="outlined" className={classes.textField}>
              <Typography variant="body1" className={classes.label}>
                Categoria
              </Typography>
                <Select
                  labelId="category-label"
                  id="category-select"
                  value={category}
                  onChange={(e: ChangeEvent<{ value: unknown }>) => setCategory(e.target.value as string)}
                  label="Categoría"
                >
                  <MenuItem value="">Seleccione una categoría</MenuItem>
                  <MenuItem value="Pintura">Pintura</MenuItem>
                  <MenuItem value="Escultura">Escultura</MenuItem>
                  <MenuItem value="Surrealismo">Surrealismo</MenuItem>
                  <MenuItem value="Abstracto">Abstracto</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body1" className={classes.label}>
                Descripción
              </Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                multiline
                minRows={4}
                value={description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              />
              <Typography variant="body1" className={classes.label}>
                Foto
              </Typography>
              <input type="file" accept="image/*" onChange={handleImageChange} />


              <div className={classes.buttonContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  {mode === 'create' ? 'Guardar' : 'Actualizar'}
                </Button>
                {mode === 'update' && (
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleCancelar}
                    className={classes.button}
                  >
                    Cancelar
                  </Button>
                )}
              </div>
            </form>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

ArtworkForm.propTypes = {
  mode: PropTypes.string.isRequired,
  setArtworks: PropTypes.func.isRequired,
  selectedArtwork: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    creationDate: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
  setSelectedArtwork: PropTypes.func.isRequired,
};

export default ArtworkForm;


