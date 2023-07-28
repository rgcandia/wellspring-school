import { Box } from "@mui/material"
import image from '../../images/datosUtiles/datos_utiles.jpg'
import Box2 from "./Box2/Box2.jsx"
import Box3 from "./Box3/Box3.jsx"
import Box4 from "./Box4/Box4"
import Box5 from './Box5/Box5.jsx'
import Box6 from "./Box6/Box6"
import styles from './DatosUtiles.module.css'
export default function DatosUtiles (){
    return(<Box>
         <Box className={styles.box1}>
            <img className={styles.image} alt={image} src={image} loading='lazy'/>
        </Box>
        <Box><Box2/></Box>
        <Box><Box3/></Box>
        <Box><Box4/></Box>
        <Box><Box5/></Box>
        <Box><Box6/></Box>
    </Box>)
}