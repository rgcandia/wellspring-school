import io from "socket.io-client";
let socket;

// inicia socket con el usuario en el evento join
export const initSocket = (user)=>{
   // socket = io('https://wellspring-api.adaptable.app/',{transports:['websocket']})
    socket = io('http://localhost:4001/',{transports:['websocket']})
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

export const setForm = (email)=>{

  if(!socket) return null;
  socket.emit("setForm",email);
  
}

export const listenersocket = (email,dispatch,action)=>{
  socket.on(email,(value)=>{
  dispatch(action(value))
  })
}


export const updateForm = ({id,form,user})=>{
socket.emit('updateForm',{id,form,user})
}
