import { Box,Typography,TextField,Button, ListItemSecondaryAction} from "@mui/material";
import styles from './Form.module.css'

export default function Form() {

    
    return (
        <Box 
        className={styles.form}
        component='form'> 
            <Box sx={{textAlign:'center'}}>
            <Typography
          component='p' 
          variant='h6'
          fontStyle='italic'
        
           >CONTACTO</Typography>
            </Box>
           
           <TextField
           id="nombre"
           type='text'
           label='Nombre'
           fullWidth
           margin='dense'  
           required
           
               />
           <TextField
           id="email"
           type='email'
           label='Email'
           fullWidth
           margin='dense'  
           required   
       
           />
           <TextField
           required
           id="comentarios"
           type='text'
           label='Comentario'
           fullWidth
           margin='dense'
           multiline
           rows={6}  
           />
           <Box sx={{textAlign:'center'}}>
           <Button
       type='submit'
       variant='contained'

       >Enviar</Button>

           </Box>
    
       
          
      
        </Box>
    )
}