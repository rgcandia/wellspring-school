import {authListener} from './firebase/auth_state_listener.js'
import {uploadUser} from './redux/slice.js'
import Swal from 'sweetalert2'



export function initListener(dispatch){
 authListener(dispatch,uploadUser)
 
}
export function alertSendFormOk(){
     

  return   Swal.fire(
    {
        title:'Buen trabajo !',
        text:'Formulario enviado correctamente',
        icon:'success',
        confirmButtonColor:'#0c3f5c',
       

    }
    
  )
}