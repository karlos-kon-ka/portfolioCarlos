import { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { gsap } from "gsap";
import experienciasData from '../experiencia.json'; // Asegúrate de que este archivo esté correctamente ubicado

function Experiencias() {
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    // Animaciones con GSAP
    gsap.fromTo(
      ".exp-titulo",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".exp-item",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      }
    );

    // Cargar datos de experiencias desde el archivo JSON
    setExperiencias(experienciasData);
  }, []);

  return (
    <section className="experiencia">
      <Box sx={{ padding: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          color="primary"
          className="exp-titulo"
          align="center"
          gutterBottom
        >
          Trabajos como Freelancer
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {experiencias.map((exp, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                className="exp-item"
                elevation={6}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxSizing: "border-box",
                  borderRadius: 2,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {exp.titulo}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                  {exp.fecha}
                </Typography>
                <Typography variant="body1" color="textPrimary" sx={{ marginBottom: 2 }}>
                  {exp.descripcion}
                </Typography>

                {/* Mostrar imagen según la fuente */}
                {exp.fuente === "Wallapop" && (
                  <img
                    src="/img/walla.png" // Ajusta la ruta a donde esté tu imagen
                    alt="Wallapop"
                    style={{
                      width: "50px", // Ajusta el tamaño de la imagen
                      marginTop: "10px",
                    }}
                  />
                )}

                {exp.fuente === "Milanuncios" && (
                  <img
                    src="/img/mil.png" // Ajusta la ruta a donde esté tu imagen
                    alt="Milanuncios"
                    style={{
                      width: "50px", // Ajusta el tamaño de la imagen
                      marginTop: "10px",
                    }}
                  />
                )}

                {/* Aquí ya no mostramos el texto de la fuente */}
                <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
                  {exp.precio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}

export default Experiencias;
