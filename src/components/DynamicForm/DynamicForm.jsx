import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Body from "./Body/Body";
import styles from "./DynamicForm.module.css";

export default function DynamicForm() {
  const { id } = useParams();
  const { values,models } = useSelector((state) => state.value);
  const data = values?.find((item) => item.id == id);
 const modelId = data?.model;
 const modelForm =  models?.find((e)=>e.id==modelId);
const model =  modelForm?.data;


  return (
   <Box className={styles.containerForm}>
     <Box>
      <Link to='/dashboard' style={{textDecoration:'none'}}>
        <Typography variant='h6' color='primary'>  <ArrowBackIcon/> Volver</Typography>
      </Link>
     </Box>
    {data&&<Body data={data} model={model}/>}

   </Box>
  );
}
