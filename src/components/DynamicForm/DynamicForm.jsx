import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Body from "./Body/Body";
import styles from "./DynamicForm.module.css";
import { useEffect } from "react";
import { initListener } from "../../services";
import {getForms, listenersocket} from '../../socket.js'
import {uploadModels, uploadValues} from '../../redux/slice.js'
import { useDispatch, useSelector } from "react-redux";
export default function DynamicForm() {
const {forms} = useSelector(state=>state.data)
  useEffect(()=>{
    
    window.scrollTo(0, 0);
 },[forms]) 

  return (
   <Box className={styles.containerForm}>
    
    {forms&&<>
    
      <Box>
      <Link to='/dashboard' style={{textDecoration:'none'}}>
        <Typography variant='h6' color='primary'>  <ArrowBackIcon/> Volver</Typography>
      </Link>
     </Box>
    <Body />
    </>}

   </Box>
  );
}
