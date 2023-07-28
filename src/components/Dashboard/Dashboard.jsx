import { Box } from "@mui/material";
import {getForms, listenersocket} from '../../socket.js'
import {uploadModels, uploadValues} from '../../redux/slice.js'
import {useEffect} from 'react'
import Login from "./Login/Login";
import { useSelector,useDispatch } from "react-redux";
import { initListener } from "../../services";
import Unlog from "./Unlog/Unlog";
import {Outlet} from 'react-router-dom'
import styles from './Dashboard.module.css';
export default function Dashboard (){
    const dispatch =useDispatch();
    const {user,forms} = useSelector(state=>state.data)
    useEffect(()=>{
        initListener(dispatch)
        getForms(dispatch,uploadValues,uploadModels)
        user?listenersocket(user,dispatch,uploadValues):null
        },[user]);
     useEffect(()=>{
        window.scrollTo(0, 0);
     },[forms])
return(<Box className={styles.dashboard}>

       {!user&&<Login/>}
       {user&&<Unlog/>}
         
       <Outlet/>
    </Box>)
}