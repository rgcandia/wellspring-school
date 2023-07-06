import { Box, Typography } from "@mui/material";
import {getIcons} from './services.js'
import styles from './BoxDatosUtiles.module.css'
export default function BoxDatosUtiles (){
    return(<Box className={styles.main} sx={{backgroundColor:'primary.main'}}>
        <Box>

        <Typography variant='h5' sx={{color:'secondary.main',textAlign:'center',fontStyle:'italic', padding:'5px'}} >DATOS UTILES</Typography>
        </Box>
         <Box className={styles.container}>
            {getIcons.map(e=>{
                return(<Box className={styles.box} key={e.path} >
                    <Box className={styles.imageContainer} ><img className={styles.image}  alt={e.path} src={e.path}/></Box>
                    <Typography  variant='overline' sx={{color:'secondary.main',fontWeight:'200'}} className={styles.label}>{e.label}</Typography>
                </Box>)
            })}
         </Box>
    </Box>)
}