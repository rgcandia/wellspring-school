import {  Box, Container, Typography } from "@mui/material"
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from "./components/Footer/Footer.jsx"
import styles from './App.module.css'
function App({children}) {

  return (
    <Container 
    maxWidth='xl'
    className={styles.container}
    >
     <Navbar/> 
     {children}
      
    </Container>
  )
}

export default App
