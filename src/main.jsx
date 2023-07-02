import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  CssBaseline  from '@mui/material/CssBaseline';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import './global.css'
import { RouterProvider} from 'react-router-dom'
import router from './router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App>
      {/* <RouterProvider router={router}/> */}
    </App>
    </ThemeProvider>
  </React.StrictMode>,
)
