import { Box, Typography } from "@mui/material"
import styles from './Texto.module.css'
export default function Texto (){
    return(<Box className={styles.texto}>

            <Box sx={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>
                <Typography variant="h5">VIAJES DE ESTUDIO</Typography>
            </Box>
            <Box>
            <Box sx={{marginBottom:'10px'}}>
                <Typography variant="body2" component='h5'><strong>VIAJES NACIONALES:</strong></Typography>
            </Box>
           <Box sx={{marginBottom:'10px'}}>  
             <Typography variant='body2' component='p'>
                Wellspring School cuenta con un proyecto  de viajes de estudio a distintos destinos dentro de nuestro pais.
                La intención es que puedan conocer lugares de interes históricos, paleontológicos, arquelógicos y zoológicos,
                presentes en la curricula escolar de las distintas áreas y materias. Destinos turísticos: Iguazú y zona de influencia, Cuyo y alrededores, Noroeste argentino
                y Puerto Madryn.
            </Typography></Box>
            <Box sx={{marginBottom:'10px'}}>
            <Typography variant='body2' component='p'>
                Pretendemos, además de poder enriquecer nuestra propuesta pedagógica, fomentar la unión, la camadería entre toda la Secundaria y la posibilidad, que al viajar sin sus padres,
                puedan desempeñarse con responsabilidad y autonomía.
            </Typography>
            </Box>
            </Box>

            <Box>
                <Box sx={{marginBottom:'10px'}}> <Typography variant="body2" component='h5'><strong>VIAJES A EUROPA:</strong></Typography></Box>
                <Box sx={{marginBottom:'10px'}}>
                    <Typography variant='body2' component='p'>
                    Wellspring School ofrece esta experiencia a sus alumnos desde el año 1998. El viaje tiene una duración de entre dos y tres semanas dependiendo si se incluye la visita a una ciudad adicional.
                     De acuerdo a la cantidad de alumnos, se elije el colegio más apropiado para que los alumnos puedan experimentar un intercambio cultural con alumnos de otras nacionalidades.
                    </Typography>
                </Box>
                <Box sx={{marginBottom:'10px'}}>
                    <Typography variant='body2' component='p'>
                    Los últimos años se realizó en "Brookes University - Harcourt Hill Campus, en Oxford". Dicha universidad está ubicada en las afueras de la ciudad de Oxford dentro del condado de Oxfordshire y 
                es mundialmente conocida por contar con la "University of Oxford", la universidad más antigua de habla inglesa del mundo.
                    </Typography>
                
                </Box>
                <Box sx={{marginBottom:'10px'}}>
                    <Typography  variant='body2' component='p'>
                    También se visitan las ciudades de Edimburgo y sus principales atracciones, Manchester y Liverpool. El curso se compone de 10 lecciones que se cursan por la mañana y por la tarde,
                 con actividades diarias diurnas y nocturnas. El objetivo del plan de estudios es lograr incrementar la confianza de los alumnos en el uso de la lengua, a través de actividades
                 y temas que sean de su interés. Las actividades son presentadas en un contexto donde se puede ver el uso de la lengua en el mundo real y no solo a través de las lecciones.
                    </Typography>
               
                </Box>
            </Box>

    </Box>)
}