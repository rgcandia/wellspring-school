import { Box } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import styles from './CreateForm.module.css';
import { useSelector } from "react-redux";
import { setForm } from "../../../socket"; 
import { alertSetFormOk } from "../../../services";
const CreateForm = ()=>{
    const {user,models} =  useSelector(state=>state.data)
    const handlerClick = (e)=>{
        setForm(user,models[0].id);
        alertSetFormOk();
    }
    return (<Box>
       <Box className = {styles.button} component='div' onClick={handlerClick}>
       <AddIcon sx={{fontSize:40}}/>
       </Box>
    </Box>)
}

export default CreateForm;