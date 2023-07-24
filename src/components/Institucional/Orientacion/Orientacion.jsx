import { Typography ,Box} from "@mui/material";
import orientacion from '../../../images/institucional/departamento_orientacion.jpg'
import styles from './Orientacion.module.css'
export default function Orienctacion (){
    return(< Box className={styles.orientacion}sx={{backgroundColor:'secondary.main'}}>
        <Box className={styles.box} >
        <Typography component='p' variant='body2'>
            
            Este departamento realiza tareas de prevención de problemáticas psicológicas-pedagógico-sociales en el ámbito educativo y 
            de promoción de la salud integral de la comunidad escolar. Asesora y orienta en temáticas vinculadas con el ejercicio profesional:
             relaciones educativas, convivencia, dinámica de grupos, necesidades educativas especiales, estrategias de intervención en el aula y otros. 
             Asiste a los alumnos, guiando los procesos de convivencia y participación en el Colegio, así como también el seguimiento de los aprendizajes.
         </Typography>
        </Box>
       <Box className={styles.box}>
       <Typography component='p' variant='body2'>
        Brinda herramientas a alumnos y a padres, en el contexto Institucional, favoreciendo la optimización del aprendizaje y el rendimiento académico,
         promoviendo la salud integral de los chicos. Interviene en situaciones de conflicto, comunica e intercambia información con profesionales,
         instituciones y servicios de salud que trabajen con los alumnos del Colegio. Brinda espacios de reflexión y orientación sobre la vocación y el proyecto de vida.
        </Typography>
       </Box>
       <Box className={styles.box}>
       <Typography component='p' variant='body2'>
        Propicia la construcción y el fortalecimiento de redes sociales, institucionales y comunitarias. Implementa diferentes dinámicas con el fin de trabajar a nivel personal y grupal, 
        según las necesidades, inquietudes y dificultades.
        </Typography>
       </Box>
       <Box className={styles.box}>
        <Typography component='p' variant='body2'>
        De esta manera se puede realizar un adecuado seguimiento y acompañamiento.
        </Typography>
        </Box>
        <Box className={styles.image}>
            <img src={orientacion} alt='imagen de maestra de inicial, rodeada de alumnos  atentos a la explicación' loading='lazy'/>
        </Box>
    </Box>)
}