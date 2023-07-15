import { Box, Typography } from "@mui/material";
import styles from './Dashboard.module.css';
import Login from "./Login/Login";
export default function Dashboard (){
    return(<Box className={styles.dashboard}>
        <Typography variant='h2' color='primary'>
            Ingresar
        </Typography>
        <Box className={styles.containerLogin}>

        <Login/>
        </Box>
    </Box>)
}