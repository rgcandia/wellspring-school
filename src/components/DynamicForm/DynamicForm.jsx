import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Body from "./Body/Body";
import styles from "./DynamicForm.module.css";
import { uploadSelectedForm } from "../../redux/slice";
import { useEffect } from "react";

export default function DynamicForm() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { forms,models,user } = useSelector((state) => state.data);
  const data = forms?.find((item) => item.id == id);
 const modelId = data?.model;
 const modelForm =  models?.find((e)=>e.id==modelId);
const model =  modelForm?.data;
const handleClick = (data)=>{
  dispatch(uploadSelectedForm(data))
 }
 useEffect(()=>{
  dispatch(uploadSelectedForm(data))
 },[data])

  return (
   <Box className={styles.containerForm}>
     <Box>
      <Link to='/dashboard' style={{textDecoration:'none'}} onClick={()=>{handleClick(null)}}>
        <Typography variant='h6' color='primary'>  <ArrowBackIcon/> Volver</Typography>
      </Link>
     </Box>
    {data&&<Body data={data} model={model} user={user}/>}

   </Box>
  );
}
