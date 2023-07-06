import { Box, Card, Typography } from "@mui/material";
import kinder from '../../../../images/boxNiveles/kinder.jpg'
import primaria from '../../../../images/boxNiveles/primaria.jpg'
import secundaria from '../../../../images/boxNiveles/secundaria.jpg'
import styles from './CardNiveles.module.css'
export default function CardNiveles(){
    
    const getImage = [
        {path:kinder,label:'KINDER'},{path:primaria,label:'PRIMARIA'},{path:secundaria,label:'SECUNDARIA'}
    ]
    return <Box className={styles.card}>
        {getImage.map(e=>{
            return<Card key={e.label} className={styles.box} sx={{display:'flex',alignItems:'center',justifyContent:'center',alignItems:'center',backgroundColor:'secondary.main'}}>
                <img  alt={e.label} src={e.path}/>
                <Typography sx={{color:'primary.main'}} variant='inherit' component='p'>{e.label}</Typography>
            </Card>
        }
        )}
    </Box>
}