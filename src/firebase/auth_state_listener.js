import {auth} from './app.js'
import {  onAuthStateChanged } from "firebase/auth";
export function authListener(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          
          console.log('usuario conectado')
          // ...
        } else {
          // User is signed out
          // ...
         console.log("usuario desconectado")
        }
      });
      
}