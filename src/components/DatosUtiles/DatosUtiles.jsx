import { Box } from "@mui/material"
import image from '../../images/datosUtiles/datos_utiles.jpg'
import Box2 from "./Box2/Box2.jsx"
import Box3 from "./Box3/Box3"
import styles from './DatosUtiles.module.css'
export default function DatosUtiles (){
    return(<Box>
         <Box className={styles.box1}>
            <img className={styles.image} alt={image} src={image} loading='lazy'/>
        </Box>
        <Box><Box2/></Box>
        <Box><Box3/></Box>
        <Box>box4</Box>
        <Box>box5</Box>
        <Box>box6</Box>
    </Box>)
}