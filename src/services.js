import {authListener} from './firebase/auth_state_listener.js'
import {uploadUser} from './redux/slice.js'
import {uploadValues} from './redux/slice.js'

export function initListener(dispatch){
 authListener(dispatch,uploadUser)
 
}

export  function getForms (user,dispatch){

 

}