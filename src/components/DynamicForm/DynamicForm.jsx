import { useRef } from "react";
import { Box, Button } from "@mui/material";
import ItemForm from "./ItemForm/ItemForm";

export default function DynamicForm({ data }) {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Accede a los valores del formulario utilizando la referencia
    const formData = new FormData(formRef.current);
    console.log(formData);
    for (let [name, value] of formData) {
      const inputElement = formRef.current.elements[name];
      console.log("Name:", name);
      console.log("Value:", value);
    }
  };

  return (
    <Box  component="form" ref={formRef} onSubmit={handleSubmit}>
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