import { Box } from '@mui/material'
import styles from './Niveles.module.css'
import niveles from '../../images/niveles/niveles.jpg'
export default function Niveles (){
    return(<Box>
        <Box className={styles.image}>
            <img
            src={niveles}
            alt='Profesor enseñando rugby a los alumnos'
            loading='lazy'
            />
        </Box>
        
    </Box>)
}