import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ItemForm from "./ItemForm/ItemForm";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {updateForm} from '../../socket.js'
import {alertSendFormOk} from '../../services.js'
import Body from "./Body/Body";
import styles from "./DynamicForm.module.css";

export default function DynamicForm() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { id } = useParams();
  const { values,user,models } = useSelector((state) => state.value);
  const data = values?.find((item) => item.id == id);
 const modelId = data?.model;
 const modelForm =  models?.find((e)=>e.id==modelId);
const model =  modelForm?.data;

  const handleSubmit = (event) => {
    event.preventDefault();
    const arrayForm = [];

    // Accede a los valores del formulario utilizando la referencia
    const formData = new FormData(formRef.current);

    for (let [name, value] of formData) {
      arrayForm.push({
        name,
        value,
      });
    }

    // Ejecutar fetch a la API con el formulario en el body
    // ...
    updateForm({id,form:arrayForm,user})
    alertSendFormOk()
    .then((result)=>{
      if(result.isConfirmed){
        navigate('/dashboard')
      }
    })
    
  };

  return (
   <Box className={styles.containerForm}>
     <Box>
      <Link to='/dashboard' style={{textDecoration:'none'}}>
        <Typography variant='h6' color='primary'>  <ArrowBackIcon/> Volver</Typography>
      </Link>
     </Box>
    {data&&<Body data={data}/>}
    
    {/* {model&&
     <Box className={styles.form} component="form" ref={formRef} onSubmit={handleSubmit}>
     {model ? (
       <>
         {model.map((e) => {
           return <ItemForm key={e.id} item={e} />;
         })}
       </>
     ) : null}
     <Button type="submit" variant="contained">Enviar</Button>
   </Box>
    } */}
   </Box>
  );
}
