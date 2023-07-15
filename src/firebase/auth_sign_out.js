import {auth} from '../firebase/app.js'
import { signOut } from "firebase/auth";
export function disconect(){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('usuario desconectado')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
}