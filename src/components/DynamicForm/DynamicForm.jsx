import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ItemForm from "./ItemForm/ItemForm";
import styles from "./DynamicForm.module.css";

export default function DynamicForm() {
  const formRef = useRef(null);
  const { id } = useParams();
  const { modelforms } = useSelector((state) => state.value.values);

  useEffect(()=>{},)
  const data = modelforms?.find((item) => item.id === "1");


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
