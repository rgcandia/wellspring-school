import styles from './Index.module.css'
import image from '../../images/aerea_ws.jpg'
import BoxInstitucional from './BoxInstitucional/BoxInstitucional'
import BoxDatosUtiles from './BoxDatosUtiles/BoxDatosUtiles.jsx'
import BoxNiveles from './BoxNiveles/BoxNiveles.jsx'
import { Box } from '@mui/material'
export default function Index (){
    return(<Box className={styles.container}>

<Box className={styles.box1}>
    <img className={styles.image}  alt={image} src={image}/>
</Box>
<Box className={styles.box2}>
   <BoxInstitucional/>
</Box>
<Box className={styles.box3}>
   <BoxDatosUtiles/>
</Box>
<Box className={styles.box4}>
    <BoxNiveles/>
</Box>
<Box className={styles.box5}>MAPA - FORM</Box>

</Box>)
}