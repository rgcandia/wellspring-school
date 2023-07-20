import { Box } from "@mui/material";
import {getForms, listenersocket} from '../../socket.js'
import {uploadValues} from '../../redux/slice.js'
import {useEffect} from 'react'
import Login from "./Login/Login";
import { useSelector,useDispatch } from "react-redux";
import { initListener } from "../../services";
import Unlog from "./Unlog/Unlog";
import DashHome from '../DashHome/DashHome.jsx';
import {Outlet} from 'react-router-dom'
import styles from './Dashboard.module.css';
export default function Dashboard (){
    const dispatch =useDispatch();
    const {user} = useSelector(state=>state.value)
    useEffect(()=>{
        initListener(dispatch)
        getForms(dispatch,uploadValues)
        user?listenersocket(user,dispatch,uploadValues):null
        },[user]);
     useEffect(()=>{
        window.scrollTo(0, 0);
     },[])   
return(<Box className={styles.dashboard}>
       
       {!user&&<Login/>}
       {user&&<Unlog/>}   
       <Outlet/> 
    </Box>)
}