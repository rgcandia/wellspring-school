import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './theme';
import  CssBaseline  from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {Provider} from 'react-redux'
import { RouterProvider} from 'react-router-dom'
import router from './router.jsx'
import {store} from './redux/store.js'
import './global.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
   
    </ThemeProvider>
  </React.StrictMode>,
)
