import { Box, Typography } from '@mui/material'
import styles from './Niveles.module.css'
import niveles from '../../images/niveles/niveles.jpg'
import Inicial from './Inicial/Inicial.jsx'
export default function Niveles (){
    return(<Box>
        <Box className={styles.image}>
            <img
            src={niveles}
            alt='Profesor enseñando rugby a los alumnos'
            loading='lazy'
            />
        </Box>
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Typography variant='h6'>NIVELES</Typography>
        </Box>
        <Inicial/>
        
    </Box>)
}