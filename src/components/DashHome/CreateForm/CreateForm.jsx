import { Box } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import styles from './CreateForm.module.css';

const CreateForm = ()=>{
    return (<Box>
       <Box className = {styles.button}>
       <AddIcon sx={{fontSize:40}}/>
       </Box>
    </Box>)
}

export default CreateForm;