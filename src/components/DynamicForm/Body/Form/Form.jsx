import React from 'react';
import { Dialog ,  Slide ,AppBar, Toolbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RenderForm from './RenderForm/RenderForm';
import { useDispatch , useSelector} from "react-redux";
import { updateForm } from '../../../../redux/slice.js'
import styles from './Form.module.css'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Form({isOpen,handleClose}){
    const resetForm = ()=>{
        return(
          {
            home:{lugar:{
              Teatro:false,
              Tinglado:false,
              CampoDeporte:false,
              Otro:false,
            }},
            teatro:{
              padres:false,
              alumnos:false,
              sobreEscenario:false,
              bajoEscenario:false,
        
              dataSobreEscenario:{
                pieMicrofono:false,
                proyector:false,
                puntero:false,
              pantalla:false,
            computadora:false,  
              },
              dataBajoEscenario:{
                proyector:false,
                fondoPrensa:false,
                computadora:false,
                alargue:false,
                aireAcondicionado:false,
                cafe:false,
                aguaCaliente:false,
              },
            },
            tinglado:null,
            campoDeporte:{
              parlantes:false,
              computadora:false,
              consola:false,
              fondoPrensa:false,
              podio:false,
            },
            otro:null,
          }
        )
    }
   
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.data.form);
    
    const handlerExit = ()=>{
       handleClose(false)
       dispatch(updateForm(resetForm()))
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
<RenderForm handleClose={handlerExit}/>
</Dialog> 
    )
}