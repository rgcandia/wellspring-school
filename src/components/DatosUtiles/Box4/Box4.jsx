import styles from './Box4.module.css'
import { Box, Typography } from '@mui/material'
import CheckroomIcon from '@mui/icons-material/Checkroom';
export default function Box4 (){
    return (<Box className={styles.box4}>
       <Typography variant='h6'>UNIFORMES <CheckroomIcon fontSize='medium'/></Typography>
        <Typography variant='body2'>Lo uniformes se encuentran a la venta en el predio del Colegio</Typography>
        <Typography variant='body2'><strong>Horarios de atención:</strong> Lunes y Miércoles de 8:15 a 12:45 hs - Martes y Jueves de 8:15 a 16:45 hs.</Typography>
        <Typography variant='body2'>Cualquier consulta comunicarse a info@ragbox.com.ar</Typography>
        <Typography variant='body2'>Para conocer el uniforme reglasmentario clickear aquí</Typography>
    </Box>)
}