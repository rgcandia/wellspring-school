import io from "socket.io-client";
let socket;
const apiUrlDeploy = import.meta.env.VITE_URL_API_DEPLOY;
const apiUrlDev = "http://localhost:4001/";
const apiUrl = import.meta.env.PROD ? apiUrlDeploy : apiUrlDev;

// inicia socket con el usuario en el evento join
export const initSocket = (user)=>{

   

    socket = io(apiUrl,{transports:['websocket']})
    console.log('Connecting socket...')
    if (socket && user) {
        socket.emit("join", user);
      }
}
export const getForms = (dispatch,action,action2)=>{
  if (!socket) return null;
  socket.on('models',(models)=>{
   if(!socket) return null;
   return dispatch(action2(models))
  })
  socket.on('forms',(value)=>{
    if(!value)return dispatch(action([]))
    return dispatch(action(value))
  })

}

export const setForm = (email,idModel)=>{

  if(!socket) return null;
  socket.emit("setForm",{email,idModel});
  
}

export const listenersocket = (email,dispatch,action)=>{
  socket.on(email,(value)=>{
  dispatch(action(value))
  })
}


export const updateForm = ({id,form,user})=>{
socket.emit('updateForm',{id,form,user})
}

export const deleteFormPending = (id,user)=>{
  socket.emit('deleteFormPending',{id,user})
}
