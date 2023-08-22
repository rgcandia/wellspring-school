import { Typography,Box } from "@mui/material";
import propuesta from '../../../images/institucional/propuesta_educativa.jpg'
import styles from './Propuesta.module.css'
export default function Propuesta(){
    return(<Box className={styles.propuesta} sx={{backgroundColor:'secondary.main'}}>
       
       <Box sx={{paddingBottom:'15px'}}>
        <Typography component='h6' variant='body2'> <strong>OBJETIVOS</strong></Typography>
        <Typography component='p' variant='body2'>
 Trabajamos para desarrollar estrategias que fomentan en el alumno el pensamiento crítico y la toma de decisiones,
  para utilizarlo en beneficio propio y del medio socio-cultural en que se encuentre. También para estimular sus acciones como personas,
   remarcando la singularidad de cada uno, en búsqueda de su identidad y autenticidad, fomentando en todo momento la participación de los padres y 
   su colaboración en las distintas etapas por las que vayan atravesando sus hijos.
 </Typography>
        </Box>
 <Box sx={{paddingBottom:'15px'}}>
 <Typography component='h6' variant='body2'> <strong>VALORES</strong> </Typography>
 <Typography component='p' variant='body2'>
 Formamos a nuestros alumnos trabajando el valor de la honestidad, la solidaridad, 
 la verdad, la libertad, la justicia y la responsabilidad, profundizando en el respeto  
 y en el derecho personal de expresarlos libremente, con el objeto de superar las actitudes individualistas, promoviendo las prácticas solidarias.
 </Typography>
 </Box>
 <Box sx={{paddingBottom:'15px'}}>
 <Typography component='h6' variant='body2'> <strong>MODELO PEDAGOGICO</strong> </Typography>
 <Typography component='p' variant='body2'>
 El proyecto bilingüe de Wellspring School aspira a desarrollar y consolidar una formación integral desde el nivel Inicial hasta el egreso en la Escuela Secundaria. La propuesta educativa se enfoca en el uso correcto del idioma nacional y desarrollar la capacidad del uso bilingüe de la lengua inglesa.
 
 El estilo de enseñar y de aprender se basa en el concepto de una educación personalizada, es decir, aquella que se realiza conscientemente en función de cada persona, entendiéndola como una realidad particular que tiene sus propias posibilidades y sus propias limitaciones.
 
 Para concretar este estilo pensamos en una escuela que sea sinónimo de crecimiento y de aprendizaje permanente, que permita a cada uno elegir, aceptar y valorar con autonomía la búsqueda de su identidad.
 Juntos formamos una comunidad en la que el diálogo, la solidaridad y el respeto son el medio de comunicación y de interacción.
 </Typography>
 </Box>
 <Box className={styles.image}>
       <img src={propuesta} alt="imagen propuesta educativa" loading='lazy' />
 </Box>


       
  </Box>)
}