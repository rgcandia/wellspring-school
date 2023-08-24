import { Box } from "@mui/material"
import styles from './Imagenes.module.css'
import k1 from '../../../../images/inicial/k1.jpg'
import k2 from '../../../../images/inicial/k2.jpg'
import k3 from '../../../../images/inicial/k3.jpg'
import kinder1 from '../../../../images/inicial/kinder1.jpg'
export default function Imagenes (){
    return(<Box>
        <Box className={styles.imagenes}>
        <img
        src={k1}
        alt='imagen nena de jardin dibujando'
        loading='lazy'
        />
        <img
        src={k2}
        alt="Imagen 3 nenes de jardin jugando "
        loading="lazy"
        />
        <img
        src={k3}
        alt='imagen 2 nenas riendo'
        loading="lazy"
        />
        </Box>
        <Box className={styles.imagen}>
        <img
        src={kinder1}
        alt='imagene dos chicos de jardin jugando con dinosaurios'
        loading="lazy"
        />
        </Box>
    </Box>)
}