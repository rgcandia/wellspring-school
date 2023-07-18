import { Box, Button, Typography } from "@mui/material";
import {disconect} from '../../../firebase/auth_sign_out.js'
import { useDispatch } from "react-redux";
import {uploadUser} from '../../../redux/slice.js'
import styles from './Unlog.module.css'
export default function Unlog(){
    const dispatch = useDispatch;
  const handleClick = ()=>{
    disconect(dispatch,uploadUser);
    location.reload()
  }
    return(<Box className={styles.unlog}>
        <Button variant='outlined' color='primary' onClick={handleClick}>
       Cerrar sesion
        </Button>
        
     
    </Box>)
}