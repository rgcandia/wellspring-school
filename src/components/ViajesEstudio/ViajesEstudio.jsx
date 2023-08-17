import { Box } from "@mui/material"
import imagen from '../../images/Viajes/viaje_estudio.jpg'
import Texto from "./Texto/Texto"
import styles from './ViajesEstudio.module.css'
import Imagenes from "./Imagenes/Imagenes.jsx"
export default function ViajesEstudio (){
    return(<Box>

<Box className={styles.image}>
<img
  src={imagen}
  alt='imagen de fondo componente Viaje de estudio'
  loading='lazy'
  />
</Box>
<Texto/>
<Imagenes/>

    </Box>)
}