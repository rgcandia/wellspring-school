import { Typography, Box , Button } from '@mui/material'
import styles from './Card.module.css'
import { useState } from 'react'
export default function Card ({form, handleOpen}){
    const [data , setData] =  useState(form);
    const {id,email,pending,formattedCreatedAt,formattedUpdatedAt} =  data;
    function compareStrings(string1, string2) {
      return string1 !== string2;
    }
    const isUpdated = compareStrings(formattedCreatedAt, formattedUpdatedAt);
    const handleClickOpen = ()=>{
      handleOpen(true);
    }
    return (
        <Box className={styles.container}>
      <Box>
        <Box className={`${styles.card} ${pending ? styles.pending : styles.completed}`}>
<Typography variant="body1" className={styles.field}>
  <strong>Formulario id:</strong> {id}
</Typography>

<Typography variant="body1" className={styles.field}>
  <strong>Para:</strong> {email}
</Typography>

<Typography variant="body1" className={styles.field}>
  <strong>Estado:</strong> {pending ? <Typography sx={{color:'red'}}>pendiente</Typography> : <Typography sx={{color:'green'}}>completado</Typography>}
</Typography>

<Typography variant="body1" className={styles.field}>
  <strong>Fecha de creación:</strong> {formattedCreatedAt}
</Typography>

<Typography variant="body1" className={styles.field}>
  <strong>Actualizada:</strong> {isUpdated ? formattedUpdatedAt : 'sin actualizar'}
</Typography>

<Button onClick={handleClickOpen}>{pending?'Completar':'Actualizar'}</Button> 
</Box>
    </Box>
        </Box>
   )
}