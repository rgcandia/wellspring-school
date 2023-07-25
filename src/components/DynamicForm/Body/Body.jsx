import React from 'react';
import { useState,useRef } from 'react';
import { AppBar, Box, Button, Typography ,Toolbar,IconButton,Dialog,Slide} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Body.module.css';
import ItemForm from '../ItemForm/ItemForm';
import { updateForm } from '../../../socket';
import { alertSendFormOk } from '../../../services';
import { useNavigate } from 'react-router-dom';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Body({ model, data }) {
    const navigate =  useNavigate();
  const { id, email, pending, createdAt, updatedAt } = data;
  const formRef = useRef(null)
  // Formatear la fecha de creación y actualización para mostrar solo la fecha y hora
  const formattedCreatedAt = new Date(createdAt).toLocaleString();
  const formattedUpdatedAt = new Date(updatedAt).toLocaleString();
  const isUpdated = formattedCreatedAt !== formattedUpdatedAt;
  //Dialog
  const [open,setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    <Box className={styles.container}>
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
          <strong>Actualizada:</strong> {isUpdated ? formattedUpdatedAt : 'false'}
        </Typography>
        
       <Button onClick={handleClickOpen}>{pending?'Completar':'Actualizar'}</Button> 
      </Box>
     
     <Dialog
       fullScreen
       open={open}
       onClose={handleClose}
       TransitionComponent={Transition}
     >
        <AppBar  sx={{ position: 'relative' }}>
            <Toolbar>
                <IconButton
                 edge="start"
                 color="inherit"
                 onClick={handleClose}
                 aria-label="close"
                >
                    <CloseIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
          {model&&
     <Box className={styles.form} component="form" ref={formRef} onSubmit={()=>{}}>
     {model ? (
       <>
         {model.map((e) => {
           return <ItemForm key={e.id} item={e} />;
         })}
       </>
     ) : null}
     <Button type="submit" variant="contained">Enviar</Button>
   </Box>
    }
     </Dialog>
    </Box>
  );
}
