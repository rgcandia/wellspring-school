import { Box } from "@mui/material"
import imagen from '../../images/Examenes/examenes.jpg'
import styles from './Examenes.module.css'
export default function Examenes (){
    return(<Box>
        <Box className={styles.image}>
        <img
  src={imagen}
  alt='background cabecera institucional'
  loading='lazy'
  />
        </Box>
        <Box>contenido</Box>
    </Box>)
}