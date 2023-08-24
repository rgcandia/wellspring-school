import { Box, Typography } from "@mui/material"
import styles from './Texto.module.css'
export default function Texto (){
    return(<Box>
        <Box><Typography>INICIAL</Typography></Box>
       <Box className={styles.subTitle}>

        <Box>flecha</Box>
        <Box>
            <Box><Typography>SALA 1, 2, 3 Y 4 - SIMPLE/DOBLE JORNADA.</Typography></Box>
            <Box><Typography>SALA DE 5 - DOBLE JORNADA (TURNO MAÑANA EN INGLÉS)</Typography></Box>
        </Box>
       </Box>
       <Box>
        <Box><Typography>
        En un marco de contención y respeto, con seguimientos personalizados y a través de una comunicación fluida, 
        diseñamos los caminos a seguir pensando constantemente en beneficio del crecimiento y el aprendizaje de los alumnos.
            </Typography></Box>
            <Box><Typography>
            La comunidad que forma nuestro Colegio es heterogénea y diversa, aspecto que enriquece en gran manera el contexto educativo,
             permitiéndonos de esta forma, establecer diferentes estrategias con el fin de cumplir los objetivos de trabajo planteados.
                </Typography></Box>
       </Box>
    </Box>)
}