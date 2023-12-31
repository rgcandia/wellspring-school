import { Box, Typography } from "@mui/material"
import flecha from '../../../../images/niveles/flecha.png'
import styles from './Texto.module.css'
export default function Texto (){
    return(<Box className={styles.texto}>
        <Box sx={{marginBottom:'15px'}}><Typography><strong>INICIAL</strong></Typography></Box>
       <Box className={styles.subTitle}>

        <Box className={styles.flecha}>
            <img
            src={flecha}
            alt='flecha'
            loading="lazy"
            />
        </Box>
        <Box>
            <Box><Typography color='primary.main'><strong>SALA 1, 2, 3 Y 4 - SIMPLE/DOBLE JORNADA.</strong></Typography></Box>
            <Box><Typography color='primary.main'><strong>SALA DE 5 - DOBLE JORNADA (TURNO MAÑANA EN INGLÉS)</strong></Typography></Box>
        </Box>
       </Box>
       <Box>
        <Box  sx={{marginBottom:'15px'}}><Typography>
        En un marco de contención y respeto, con seguimientos personalizados y a través de una comunicación fluida, 
        diseñamos los caminos a seguir pensando constantemente en beneficio del crecimiento y el aprendizaje de los alumnos.
            </Typography></Box>
            <Box  sx={{marginBottom:'15px'}}><Typography>
            La comunidad que forma nuestro Colegio es heterogénea y diversa, aspecto que enriquece en gran manera el contexto educativo,
             permitiéndonos de esta forma, establecer diferentes estrategias con el fin de cumplir los objetivos de trabajo planteados.
                </Typography></Box>
                <Box  sx={{marginBottom:'15px'}}>
                    <Typography>
                        <strong>
                        La educación bilingüe es un pilar fundamental y se estimula principalmente a través del juego y metodologías actualizadas.
                        </strong>
                    </Typography>
                </Box>
                <Box  sx={{marginBottom:'15px'}}><Typography>
                Educación Física, Educación Musical, Ajedrez y Computación son parte de nuestro proyecto. Trabajamos el desarrollo de las capacidades,
                 esto favorece la progresiva adquisición de expresión e imaginación, desarrol- lando la creatividad y sensibilidad, teniendo el juego como motor principal.
                    </Typography></Box>
                    <Box  sx={{marginBottom:'15px'}}><Typography>
                    A partir de conocer las características de cada edad, podemos abordar temas relacionados a la comuni- cación, los límites y la formación.
                     Parte de nuestra propuesta tiene como fin que podamos reflexionar y reforzar el trabajo basado en los valores.
                        </Typography></Box>
       </Box>
    </Box>)
}