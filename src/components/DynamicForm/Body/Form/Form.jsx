import React, { useState } from 'react';
import { Dialog , Box, Slide ,AppBar, Toolbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RenderForm from './RenderForm/RenderForm';
import styles from './Form.module.css'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Form({isOpen,handleClose}){
   
    const [form,setForm] = useState(null)
   
    const handlerExit = ()=>{
       handleClose(false)
    }
    return (
        <Dialog
fullScreen
open={isOpen}
onClose={handleClose}
TransitionComponent={Transition}
>
<AppBar  sx={{ position: 'relative' }}>
    <Toolbar>
        <IconButton
         edge="start"
         color="inherit"
         onClick={handlerExit}
         aria-label="close"
        >
            <CloseIcon/>
        </IconButton>
    </Toolbar>
</AppBar>
<RenderForm />
</Dialog> 
    )
}