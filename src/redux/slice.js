import { createSlice } from '@reduxjs/toolkit'
import { estructuraFormulario } from './service.js'
const initialState = {
  user: null,
  forms:null,
  models:null,
  form: estructuraFormulario,
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