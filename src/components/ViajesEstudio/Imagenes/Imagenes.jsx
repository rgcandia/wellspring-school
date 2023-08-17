import { Box } from "@mui/material"
import imagen1 from '../../../images/Viajes/viaje1.jpg'
import imagen2 from '../../../images/Viajes/viaje2.jpg'
import imagen3 from '../../../images/Viajes/viaje3.jpg'
import imagen4 from '../../../images/Viajes/viaje4.jpg'
import imagen5 from '../../../images/Viajes/viaje5.jpg'
import imagen6 from '../../../images/Viajes/viaje6.jpg'
import styles from './Imagenes.module.css'
export default function Imagenes (){
    return(<Box className={styles.imagenes}>
        <Box>
            <img
             src={imagen1}
             alt='imagen 1'
             loading='lazy'
            />
        </Box>
        <Box>
        <img
         src={imagen2}
         alt='imagen 2'
         loading='lazy'
        />
        </Box>
        <Box>
        <img
         src={imagen3}
         alt='imagen 3'
         loading='lazy'
        />
        </Box>
        <Box>
        <img
         src={imagen4}
         alt='imagen 4'
         loading='lazy'
        />
        </Box>
        <Box>
        <img
         src={imagen5}
         alt='imagen 5'
         loading='lazy'
        />
        </Box>
        <Box>
        <img
         src={imagen6}
         alt='imagen 6'
         loading='lazy'
        />
        </Box>
    </Box>)
}