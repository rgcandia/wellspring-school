import { Box, Typography } from "@mui/material"  
import styles from './Texto.module.css'
export default function Texto (){
    return<Box className={styles.text}>
        <Box sx={{display:'flex',justifyContent:'center',marginBottom:'15px'}}>
            <Typography variant='h6' commponet='h4' >ADMISION</Typography>
        </Box>
        <Box>
            <Typography variant='body2' commponet='p'  sx={{marginBottom:'10px'}} ><strong>SOLICITE UNA ENTREVISTA</strong></Typography>
        </Box>
        <Box sx={{marginBottom:'15px'}}><Typography variant='body2' commponet='p'>
        Para realizar una visita, deberá solicitarla por e-mail a admisiones@wellspring.com.ar
        o también puede comunicarse telefónicamente con Admisiones al 02320.300100, interno 43.
            </Typography></Box>
            <Box><Typography  variant='body2' commponet='p'  sx={{marginBottom:'10px'}}><strong>LAS CONDICIONES PARA LA INSCRIPCION DE ALUMNOS SON LAS SIGUIENTES:</strong></Typography></Box>
    <Box sx={{marginBottom:'15px'}}>
        <Typography variant='body2' commponet='p'>
        1. Se recibirán los formularios de inscripción de los postulantes a ingresar al establecimiento.
  </Typography>
        <Typography variant='body2' commponet='p'>
        2. Se comunicará a los padres la fecha de la prueba de admisión en la que se evaluará suficiencia oral en idioma Inglés y test de madurez para los que deseen ingresar a 1o Año de EP. Mientras que para los que deseen ingresar a EP (de 2° a 6° Año) o a Secundaria se evaluará suficiencia oral y escrita de lengua inglesa, lengua castellana y matemática.

      
        </Typography>
        <Typography variant='body2' commponet='p'>3. Los candidatos deberán reunir, además, las condiciones reglamentarias en lo referente a edad y a escolaridad anterior.</Typography>
        </Box>
    </Box>
}