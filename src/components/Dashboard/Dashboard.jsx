import { Box, Typography } from "@mui/material";
import styles from './Dashboard.module.css';
import {useEffect} from 'react'
import Login from "./Login/Login";
import { useSelector,useDispatch } from "react-redux";
import { getForms, initListener } from "../../services";
import Unlog from "./Unlog/Unlog";
import DynamicForm from "../DynamicForm/DynamicForm";

export default function Dashboard (){
    const dispatch =useDispatch();
    const {user} = useSelector(state=>state.value)
useEffect(()=>{
    initListener(dispatch)
    {user?getForms(user,dispatch):null}
},[user]);
return(<Box className={styles.dashboard}>

       {!user&&<Login/>}
       {user&&<Unlog/>}
       
        
    </Box>)
}