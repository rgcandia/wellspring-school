import { Box , Typography} from '@mui/material'
import {getInfo} from './services.js'
import styles from './Mapa.module.css'
export default function Mapa (){
   
      const  iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.829804954468!2d-58.796559699999996!3d-34.431078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f347cc1fb53%3A0x990da0389513cc07!2sWellspring%20School!5e0!3m2!1ses!2sar!4v1688740337090!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    

      return <Box 
      sx={{backgroundColor:'primary.main'}}
      className={styles.contenedor} >
            <div className={styles.map} dangerouslySetInnerHTML={{__html: iframeSource}}></div>
            <Box>
                  {getInfo.map(e=>{
                        return<Box key={e.label}className={styles.box}>
                         <img alt={e.label} src={e.icon}/>
                         <Typography variant='body2' color='secondary'>{e.label}</Typography>   
                        </Box>
                  })}
            </Box>
         </Box>
     
   

}