import { Box, Typography } from "@mui/material";
import styles from './Dashboard.module.css';
import {authListener} from '../../firebase/auth_state_listener.js'
import {useEffect} from 'react'
import Login from "./Login/Login";
import Navdashboard from "./NavDashboard/NavDashboard";
export default function Dashboard (){
useEffect(()=>{
    authListener();

},[])
return(<Box className={styles.dashboard}>
        
        <Typography variant='h2' color='primary'>
            Login
        </Typography>
        <Box className={styles.containerLogin}>

        <Login/>
        </Box>
    </Box>)
}