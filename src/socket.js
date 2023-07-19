import io from "socket.io-client";
let socket;

// inicia socket con el usuario en el evento join
export const initSocket = (user)=>{
    socket = io('https://wellspring-api.adaptable.app/',{transports:['websocket']})
    // socket = io('http://localhost:4001/',{transports:['websocket']})
    console.log('Connecting socket...')
    if (socket && user) {
        socket.emit("join", user);
      }
}

export const getForms = (dispatch,action)=>{
  if (!socket) return true;
  socket.on('forms',(value)=>{
    return dispatch(action(value))
  })

}
