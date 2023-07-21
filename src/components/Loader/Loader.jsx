import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './Loader.module.css'
export default function Loader({load}) {
  return (
   <div className={`${load ? styles.loaderOn : styles.loaderOff}`}>
    <Box className={styles.spiner}>
     < CircularProgress  />
   </Box>
   </div>
    
  );
}

