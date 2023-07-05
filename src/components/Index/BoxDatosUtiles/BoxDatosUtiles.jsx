import { Box, Typography } from "@mui/material";
import {getIcons} from './services.js'
import styles from './BoxDatosUtiles.module.css'
export default function BoxDatosUtiles (){
    return(<Box  sx={{backgroundColor:'primary.main'}}>
        <Typography variant='h5' sx={{color:'secondary.main',textAlign:'center',fontStyle:'italic', padding:'5px'}} >DATOS UTILES</Typography>
         <Box className={styles.container}>
            {getIcons.map(e=>{
                return(<div className={styles.box} key={e.path} >
                    <img className={styles.image} alt={e.path} src={e.path}/>
                    <label className={styles.label}>{e.label}</label>
                </div>)
            })}
         </Box>
    </Box>)
}