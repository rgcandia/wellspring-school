import { Box, Typography } from "@mui/material"
import flecha from '../../../../images/niveles/flecha.png'
import styles from './Texto.module.css' 
export default function Secundaria(){
    return(<Box className={styles.texto}>
                              
             <Box sx={{marginBottom:'15px',marginTop:'15px'}}>
                <Typography><strong>SECUNDARIA</strong></Typography>
            </Box>
            <Box className={styles.subTitle}>
                <Box className={styles.flecha}>
                    <img
                    src={flecha}
                    alt='flecha'
                    loading='lazy'
                    />
                </Box>
                <Box><Typography color='primary.main'>
                <strong>1° A 6° AÑO - JORNADA COMPLETA BILINGÜE.</strong>
                    </Typography></Box>
            </Box>
            <Box sx={{marginBottom:'15px'}}><Typography>
            Esta etapa es la culminación de la formación escolar de los jóvenes. Consta de seis años de estudio y está dividida en dos ciclos,
             la Secundaria básica y el Bachiller Bilingüe con orientación en Ciencias Sociales. La formación personalizada ayuda a nuestros alumnos
              a perfeccionar su capacidad de dirigir su propia vida y los guía para que asuman sus propias decisiones en forma libre y responsable,
               basándose en los valores que transmitimos.
                </Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography><strong>
            A lo largo de toda la escolaridad son guiados para ejercitar la autonomía, 
            poniendo en práctica la iniciativa, la libertad, la responsabilidad, la aceptación y la elección.
                </strong></Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography>Tienen a su alcance distintas ofertas deportivas, talleres, proyectos solidarios y viajes de estudio.</Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography>
            El dominio del idioma Inglés funciona como una herramienta que les brinda el poder de la diferenciación. También ayudamos a nuestros alumnos
             en el proceso de elección de su carrera Universitaria, a través de la orientación vocacional y les ofrecemos convenios con distintas Universidades.
                </Typography></Box>

    </Box>)
}