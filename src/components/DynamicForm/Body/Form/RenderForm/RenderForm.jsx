import { Box, Button, Typography } from "@mui/material";
import CampoDeporteForm from './CampoDeporteForm/CampoDeporteForm.jsx';
import TingladoForm from './TingladoForm/TingladoForm.jsx';
import TeatroForm from './TeatroForm/TeatroForm.jsx';
import HomeForm from './HomeForm/HomeForm.jsx';
import styles from './RenderForm.module.css';
import { useState } from "react";

export default function RenderForm() {
  const [currentSection, setCurrentSection] = useState("Home"); // Valor inicial es "Home"

  // Función para cambiar la sección actual
  const handleChangeSection = (sectionName) => {
    setCurrentSection(sectionName);
  };

  return (
    <Box component='form' className={styles.containerForm}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>Solicitud de Evento</Typography>

      

      </Box>

        {/* Mostrar el componente correspondiente según la sección actual */}
        {currentSection === "Home" && <HomeForm />}
        {currentSection === "Teatro" && <TeatroForm />}
        {currentSection === "Tinglado" && <TingladoForm />}
  
      <Box sx={{ display: 'flex', justifyContent: 'center' ,margin:'20px'}}>
        <Button type='submit' variant='contained'>Enviar</Button>
      </Box>
    </Box>
  );
}
