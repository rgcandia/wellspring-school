import { Box, Typography } from "@mui/material";
import styles from './Texto.module.css'
export default function Texto (){
    return(<Box className={styles.texto}>
   

    <Typography component='h3' variant='h2' textAlign='center'>INSTITUCIONAL</Typography>
    


        <Box>
        <Typography component='h6' variant='h5'>IDENTIDAD</Typography>
        <Typography component='p' variant='body1'>
            Wellspring School ofrece a sus alumnos, sin distincion de raza o creencias una educación laica, mixta y 
            bilingûe basada en principios didácticos y una metodología activa personalizada que apunta a una formación integral
        </Typography>
        </Box>
        
         <Box>
            <Typography component='h6' variant='h5'>NUESTRO COMIENZO</Typography>
            <Typography component='p' variant='body1'>
                Fundado en el año 1992, nuestro Colegio ha sido diseñado y construido contemplando todas las necesidades de bienestar del alumno, en un entorno
                pensado para fomentar el acercamiento con la naturaleza.
                Los distintos sectores se han distribuido dentro de las 4 hectáreas del campus buscando que el asentamiento respetara el plácido entorno natural,
                evitando la centralización pero al mismo tiempo, contemplando en cada área las necesidades requeridas para su función específica.
            </Typography>
            
            </Box>   

            <Box>


            </Box>

       
    </Box>)
}