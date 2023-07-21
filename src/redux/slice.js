import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  values:null,
  models:null,
}

export const stateSlice = createSlice({
  name: 'estado',
  initialState,
  reducers: {
    
    uploadUser: (state, action) => {
      state.user = action.payload
    },
    uploadValues:(state,action)=>{
      state.values=action.payload
    },
    uploadModels:(state,action)=>{
      state.models=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { uploadUser,uploadValues,uploadModels } = stateSlice.actions
export default stateSlice.reducer