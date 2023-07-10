import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './theme';
import  CssBaseline  from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import './global.css'
import { RouterProvider} from 'react-router-dom'
import router from './router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    
      <RouterProvider router={router}/>
   
    </ThemeProvider>
  </React.StrictMode>,
)
