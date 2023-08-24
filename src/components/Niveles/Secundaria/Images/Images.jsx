import { Box } from "@mui/material"
import es1 from '../../../../images/secundaria/es1.jpg'
import es2 from '../../../../images/secundaria/es2.jpg'
import es3 from '../../../../images/secundaria/es3.jpg'
import styles from './Images.module.css'
export default function Images (){
    return(<Box className={styles.image}>
      {[es1,es2,es3].map((e)=>{
        return(<Box>

            <img 
            src={e}
            alt={'chicos de secundaria'+e}
            loading="lazy"
            />
        </Box>)
      })}
    </Box>)
}