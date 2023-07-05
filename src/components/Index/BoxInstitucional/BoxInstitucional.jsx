import { Box, Typography } from "@mui/material";
import icon from '../../../images/index-13.png'
import styles from './BoxInstitucional.module.css'
export default function BoxInstitucional(){
    return(<Box >
        <Box
        className={styles.box1}
        >
        <Typography  component='p' variant='h5'>INSTITUCIONAL</Typography>
        <Typography component='p' variant='body2'>Wellspring School ofrece a sus alumnos,
             sin distinción de raza o creencias una educación laica, 
             mixta y bilingue basada en principios didácticos, actualizados 
             y una metodologia activa personalizada que apunta a una formación integral
             </Typography>
        </Box>
        <Box
        
        sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
        >
           <img className={styles.icon} src={icon} alt={icon}/> 
        </Box>
    </Box>)
}