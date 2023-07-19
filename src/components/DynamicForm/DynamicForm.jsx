import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ItemForm from "./ItemForm/ItemForm";
import {updateForm} from '../../socket.js'
import styles from "./DynamicForm.module.css";

export default function DynamicForm() {
  const formRef = useRef(null);
  const { id } = useParams();
  const { values,user } = useSelector((state) => state.value);
  const data = values?.find((item) => item.id == id);
 const {model} = data;

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
  };

  return (
   <Box className={styles.containerForm}>
     <Box>
      <Link to='/dashboard' style={{textDecoration:'none'}}>
        <Typography variant='h6' color='primary'>Volver</Typography>
      </Link>
     </Box>
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
   </Box>
  );
}
