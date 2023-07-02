import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  CssBaseline  from '@mui/material/CssBaseline';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App>
      <h1>Children  App</h1>
    </App>
    </ThemeProvider>
  </React.StrictMode>,
)
