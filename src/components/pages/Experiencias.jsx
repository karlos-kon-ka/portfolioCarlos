import  { useEffect } from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { gsap } from "gsap";

function Experiencias() {
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
        Mis Experiencias como Freelancer
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className="exp-item"
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Desarrollo Web
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Trabajo con tecnologías como React, Node.js y MongoDB para crear
              aplicaciones web dinámicas y funcionales.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className="exp-item"
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Diseño UI/UX
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Me especializo en crear experiencias de usuario agradables,
              utilizando herramientas como Figma y Adobe XD.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className="exp-item"
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Consultoría Técnica
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Brindo asesoría en arquitectura de software, escalabilidad y buenas
              prácticas de desarrollo.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </section>
  );
}

export default Experiencias;
