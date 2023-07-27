import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  forms:null,
  models:null,
  selectedForm:null,
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
    uploadSelectedForm:(state,action)=>{
    state.selectedForm = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { uploadUser,uploadValues,uploadModels,uploadSelectedForm } = stateSlice.actions
export default stateSlice.reducer