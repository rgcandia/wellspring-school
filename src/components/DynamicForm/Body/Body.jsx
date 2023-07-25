import React from 'react';
import { useState } from 'react';
import { AppBar, Box, Button, Typography ,Toolbar,IconButton,Dialog,Slide} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Body.module.css';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Body({ model, data }) {
  const { id, email, pending, createdAt, updatedAt } = data;

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
     </Dialog>
    </Box>
  );
}
