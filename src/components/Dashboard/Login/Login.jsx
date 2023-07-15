import { Box, Button, TextField } from "@mui/material";
import styles from './Login.module.css'
export default function Login(){
    return(<Box className={styles.login}>
        <TextField
         required
         id="Usuario"
         type='text'
         label='Usuario'
         fullWidth
         margin='normal'
         multiline 
         variant='standard' 
         color='primary'
       />
        <TextField 
         required
         fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant='standard' 
          color='primary'
        />
        <Box className={styles.sendContainer}>

        <Button variant='text'color='primary' >
            Ingresar
        </Button>
        </Box>
    </Box>)
}