import  { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tu servicio, template ID y user ID de Email.js
    emailjs
      .send(
        'your_service_id', // ID del servicio Email.js
        'your_template_id', // ID de la plantilla Email.js
        formData,
        'your_user_id' // Tu ID de usuario de Email.js
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Mensaje enviado con éxito');
          setFormData({
            nombre: '',
            telefono: '',
            mensaje: '',
          });
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Error al enviar el mensaje, intenta nuevamente.');
        }
      );
  };

  return (
    <>
    <section className="formulario">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" align="center">
        Contáctame
      </Typography>

      <TextField
        label="Nombre"
        variant="outlined"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <TextField
        label="Teléfono"
        variant="outlined"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        required
      />

      <TextField
        label="Mensaje"
        variant="outlined"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        required
        multiline
        rows={4}
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Box>
        </section></>
  );
}

export default Contacto;
