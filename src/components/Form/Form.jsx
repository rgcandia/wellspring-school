import { Box,Typography,TextField,Button} from "@mui/material";
import styles from './Form.module.css'

export default function Form() {

    
    return (
        <Box 
        
        className={styles.form}
        component='form'> 
         
           <Typography
           variant='body2'
           >CONTACTO</Typography>
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
       <Button
       type='submit'
       variant='contained'

       >Enviar</Button>
       
          
      
        </Box>
    )
}