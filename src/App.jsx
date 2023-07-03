import {  Box, Container, Typography } from "@mui/material"
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from "./components/Footer/Footer.jsx"
import {Outlet} from 'react-router-dom'
import styles from './App.module.css'
function App() {

  return (
    <Container 
    maxWidth='xl'
    className={styles.container}
    >
     <Navbar/> 
     <Outlet/>
      <Footer/>
    </Container>
  )
}

export default App
