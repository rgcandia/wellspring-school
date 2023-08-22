import { Box } from "@mui/material"
import styles from './Admision.module.css'
import imagen from '../../images/admision/admision.jpg'
import Texto from "./Texto"
export default function Admision (){
    return(<Box>
            <Box className={styles.image}>
                <img
                src={imagen}
                alt="manos de niño con pintura, deja sus marcas en  bandera"
                loading='lazy'                />
            </Box>
            <Texto/>
    </Box>)
}