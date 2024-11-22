import  { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

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

   
    emailjs
      .send(
        'your_service_id', 
        'your_template_id', 
        formData,
        'your_user_id' 
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
    <section className="contacto-section">
      {/* Texto de Introducción */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          ¡Trabajemos juntos!
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Estoy aquí para ayudarte a convertir tus ideas en realidad. Llena el formulario o envíame un mensaje directamente. 
        </Typography>
      </motion.div>

      {/* Formulario */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      {/* Información de Contacto */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6">Información de contacto</Typography>
          <Typography variant="body1">
            📧 Email: <a href="mailto:tucorreo@ejemplo.com">tucorreo@ejemplo.com</a>
          </Typography>
          <Typography variant="body1">📞 Teléfono: +34 123 456 789</Typography>
        </Box>
      </motion.div>

      {/* Testimonios */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Testimonios de clientes
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Box>
              <Typography variant="body1">"¡Un trabajo excepcional!"</Typography>
              <Typography variant="caption">- Juan Pérez</Typography>
            </Box>
            <Box>
              <Typography variant="body1">"Altamente profesional y rápido."</Typography>
              <Typography variant="caption">- Ana García</Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Redes Sociales */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined">LinkedIn</Button>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined">GitHub</Button>
          </a>
        </Box>
      </motion.div>
    </section>
  );
}

export default Contacto;
