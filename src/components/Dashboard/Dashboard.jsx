import { Box, Typography } from "@mui/material";
import styles from './Dashboard.module.css';
import {useEffect} from 'react'
import Login from "./Login/Login";
import { useSelector,useDispatch } from "react-redux";
import { initListener } from "../../services";
export default function Dashboard (){
    const dispatch =useDispatch();
    const {user} = useSelector(state=>state.value)
useEffect(()=>{
    initListener(dispatch)

},[user]);
return(<Box className={styles.dashboard}>

       {!user&&<Login/>}
       {user&&<>
       
       <Typography variant='h3'>
        Bienvenido {user}
       </Typography>
       </>}
        
    </Box>)
}