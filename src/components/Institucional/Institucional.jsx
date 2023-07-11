import { Box, Button } from '@mui/material'
import Propuesta from './Propuesta/Propuesta.jsx'
import Orientacion from './Orientacion/Orientacion.jsx'
import Texto from './Texto/Texto.jsx'
import { useState } from 'react'
import background from '../../images/institucional/institucional_background.jpg'
import styles from './Institucional.module.css'

export default function Institucional (){
    const [orientacion,setOrientacion] =  useState(false)
    const [propuesta,setPropuesta] = useState(true)
    const handlePropuesta = ()=>{
        setPropuesta(!propuesta)
        setOrientacion(!orientacion)
    }
    const handleOrientacion = ()=>{
        setPropuesta(!propuesta)
        setOrientacion(!orientacion)
    }
    return(<Box className={styles.institucional}>

<Box className={styles.image}>
  <img
  src={background}
  alt='background cabecera institucional'
  />
 
</Box>
<Box className={styles.text}>
    <Texto/>
</Box>
<Box className={styles.container}>
    <Box>
        <Button variant='text' onClick={handlePropuesta}>PROPUESTA EDUCATIVA</Button>
        <Button variant='text' onClick={handleOrientacion}>DEPARTAMENTO DE ORIENTACION</Button>
    </Box>
    <Box>
        {orientacion&&<Orientacion/>}
        {propuesta&&<Propuesta/>}
    </Box>
</Box>
</Box>)
}