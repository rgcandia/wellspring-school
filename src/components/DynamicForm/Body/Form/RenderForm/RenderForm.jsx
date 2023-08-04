import { Box, Button, Typography } from "@mui/material";
import CampoDeporteForm from './CampoDeporteForm/CampoDeporteForm.jsx';
import TingladoForm from './TingladoForm/TingladoForm.jsx';
import TeatroForm from './TeatroForm/TeatroForm.jsx';
import HomeForm from './HomeForm/HomeForm.jsx';
import styles from './RenderForm.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";


export default function RenderForm() {
 const {Teatro,Tinglado,Otro,CampoDeporte} = useSelector(state=>state.data.form.home.lugar);
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
        {currentSection === "CampoDeporte" && <CampoDeporteForm/>}

     


     

        {Teatro&& currentSection === "Home"&&
        <Button onClick={()=>{handleChangeSection("Teatro")}}>Teatro</Button>
        }
         {Tinglado && currentSection === "Home"&&
        <Button  onClick={()=>{handleChangeSection("Tinglado")}}>Tinglado</Button>
        }
         {CampoDeporte&& currentSection === "Home"&&
        <Button  onClick={()=>{handleChangeSection("CampoDeporte")}}>Campo de Deporte</Button>
        }
         {Otro&& currentSection === "Home"&&
        <Button  onClick={()=>{handleChangeSection("Otro")}}>Otro</Button>

        }
        
      {currentSection === "Home" &&
       <Box sx={{ display: 'flex', justifyContent: 'center' ,margin:'20px'}}>
       <Button type='submit' variant='contained'>Enviar</Button>
     </Box> }
     {currentSection !== "Home" && 
      <Box sx={{ display: 'flex', justifyContent: 'center' ,margin:'20px'}}>
      <Button variant='outlined' onClick={()=>{handleChangeSection("Home")}}>Volver</Button>
    </Box>}
    </Box>
  );
}
