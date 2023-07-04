import {  Container } from "@mui/material"
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from "./components/Footer/Footer.jsx"
import {Outlet} from 'react-router-dom'
import styles from './App.module.css'
import { useEffect, useState } from 'react';
import Loader from "./components/Loader/Loader.jsx"
function App() {
  const [load,setLoad] = useState(true)
  useEffect(()=>{
    window.addEventListener('load', function() {
      setTimeout(function() {
       
        setLoad(false)
      }, 1500); 
    
    });
  },[])

  return (
    <Container 
    maxWidth='xl'
    className={styles.container}
    >
     

     <Loader load={load} /> 
     
      
     <Navbar/> 
     <Outlet/>
      <Footer/>
    </Container>
  )
}

export default App
