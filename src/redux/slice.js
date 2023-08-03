import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  forms:null,
  models:null,
  form:{
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
    computadora:false,      },
      dataBajoEscenario:null,
    },
    tinglado:null,
    campoDeporte:null,
    otro:null,
  },
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    
    uploadUser: (state, action) => {
      state.user = action.payload
    },
    uploadValues:(state,action)=>{
      state.forms=action.payload
    },
    uploadModels:(state,action)=>{
      state.models=action.payload
    },
    updateForm:(state,action)=>{
    state.form = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { uploadUser,uploadValues,uploadModels,updateForm } = stateSlice.actions
export default stateSlice.reducer