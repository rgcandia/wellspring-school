import { Box, Typography } from "@mui/material"
import imagen from '../../images/Examenes/examenes.jpg'
import styles from './Examenes.module.css'
export default function Examenes (){
    return(<Box>
        <Box className={styles.image}>
        <img
  src={imagen}
  alt='background cabecera Examenes'
  loading='lazy'
  />
        </Box>
        <Box className={styles.texto}>
        <Box sx={{display:'flex',justifyContent:'center',marginBottom:'15px'}}>
            <Typography variant='h6' component='h5'>EXAMENES</Typography>
        </Box>
        <Box sx={{marginBottom:'15px'}}>
            <Typography variant='body2' component='p'>
            El bilingüismo queda acreditado através del proyecto bilingüe y la posibilidad de rendir exámenes internacionales de la Universidad de Cambridge. Los alumnos tienen 
            la posibilidad de rendir los siguientes exámenes.
            </Typography>
        </Box>
        <Box sx={{marginBottom:'15px'}}>
            <Typography variant='body2'> <strong>PRIMARIA</strong></Typography>
            <Typography  variant='body2' component='p'>- Cambridge Esol Exams: KET for Schools (en 5° EP)</Typography>
        </Box>

        <Box>
            <Typography variant='body2'><strong>SECUNDARIA</strong></Typography>
            <Typography  variant='body2' component='p'>
           
               - Cambridge Esol Exams: PET for Schools (Preliminary English Test) en 1° ES, FCE for schools en 3° ES y CAE (Certificate in Advanced English) en 6° ES.
            </Typography>
            <Typography  variant='body2' component='p'>
                - IGCSE (International General Certificate of Secundary Education) Exams and ICE diploma (International Certificate of Education) en 4° ES.
            </Typography >
            <Typography  variant='body2' component='p'>
               - A and As Level Exams en 6° ES.
            </Typography>
        </Box>
        <Box sx={{marginTop:'15px'}}>

            <Typography  variant='body2' component='p'>
                Sede de ESSARP (English Speaking Scholastic Association of the River Plate) para los exámenes de la Universidad de Cambridge
            </Typography>
        </Box>
        </Box>
    </Box>)
}