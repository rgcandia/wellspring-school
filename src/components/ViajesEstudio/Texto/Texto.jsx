import { Box, Typography } from "@mui/material"
import styles from './Texto.module.css'
export default function Texto (){
    return(<Box>

            <Box sx={{display:'flex',justifyContent:'center'}}>
                <Typography variant="h5">VIAJES DE ESTUDIO</Typography>
            </Box>
            <Box>
            <Box>
                <Typography variant="body2" component='h5'><strong>VIAJES NACIONALES:</strong></Typography>
            </Box>
            <Typography variant='body2' component='p'>
                Wellspring School cuenta con un proyecto  de viajes de estudio a distintos destinos dentro de nuestro pais.
                La intención es que puedan conocer lugares de interes históricos, paleontológicos, arquelógicos y zoológicos,
                presentes en la curricula escolar de las distintas áreas y materias. Destinos turísticos: Iguazú y zona de influencia, Cuyo y alrededores, Noroeste argentino
                y Puerto Madryn.
            </Typography>
            <Typography variant='body2' component='p'>
                Pretendemos, además de poder enriquecer nuestra propuesta pedagógica, fomentar la unión, la camadería entre toda la Secundaria y la posibilidad, que al viajar sin sus padres,
                puedan desempeñarse con responsabilidad y autonomía.
            </Typography>
            </Box>

            <Box>
                <Box> <Typography variant="body2" component='h5'><strong>VIAJES A EUROPA:</strong></Typography></Box>
            </Box>

    </Box>)
}