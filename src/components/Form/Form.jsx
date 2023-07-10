import { Container,Typography,TextField,Button} from "@mui/material";


export default function Form() {
    return (
        <Container>
         
           <Typography
           variant='body2'
           >CONTACTO</Typography>
           <TextField
           label='Nombre'
           fullWidth
           margin='dense'           />
           <TextField
           label='Email'
           fullWidth
           margin='dense'     
           />
           <TextField
           label='Comentario'
           fullWidth
           margin='dense'
           multiline
           rows={6}  
           />
           <Button
           variant='contained'
           >Enviar</Button>
      
        </Container>
    )
}