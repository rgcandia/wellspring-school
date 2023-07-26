import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import ItemForm from '../../../../ItemForm/ItemForm.jsx';
import styles from './Render.module.css';

export default function Render({ model,handle}) {
  const formRef = useRef({});

  const handleFormChange = (label, value) => {
    formRef.current[label] = value;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();

    Object.entries(formRef.current).forEach(([name, value]) => {
      formData.append(name, value);
    });


    


  };

  return (
    <Box className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        {model.map((item) => (
          <ItemForm key={item.id} item={item} onChange={handleFormChange} />
        ))}
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </Box>
  );
}