import { Box } from "@mui/material"
import imagen from '../../images/Viajes/viaje_estudio.jpg'
import Texto from "./Texto/Texto"
import styles from './ViajesEstudio.module.css'
export default function ViajesEstudio (){
    return(<Box>

<Box className={styles.image}>
<img
  src={imagen}
  alt='background cabecera institucional'
  loading='lazy'
  />
</Box>
<Box>
<Texto/>
</Box>
<Box></Box>

    </Box>)
}