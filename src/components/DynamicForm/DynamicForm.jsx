import { useRef } from "react";
import { Box, Button } from "@mui/material";
import ItemForm from "./ItemForm/ItemForm";
import styles from './DynamicForm.module.css'
export default function DynamicForm({ data }) {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    const arrayForm = [];
    event.preventDefault();

    // Accede a los valores del formulario utilizando la referencia
    const formData = new FormData(formRef.current);
  
    for (let [name, value] of formData) {
     arrayForm.push({
      name,value
     })
    }
    // se ejeciuta fetch a la API con el form en el body
  

  };

  return (
    <Box className={styles.form} component="form" ref={formRef} onSubmit={handleSubmit}>
      {data ? (
        <>
          {data.map((e) => {
            return <ItemForm key={e.id} item={e} />;
          })}
        </>
      ) : null}
      <Button type="submit" variant="contained">Enviar</Button>
    </Box>
  );
}