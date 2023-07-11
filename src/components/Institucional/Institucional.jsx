import { Box, Button } from '@mui/material'
import Propuesta from './Propuesta/Propuesta.jsx'
import Orientacion from './Orientacion/Orientacion.jsx'
import { useState } from 'react'
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
    return(<Box>

<Box className={styles.image}>IMAGEN DE FONDO</Box>
<Box className={styles.text}>
    tEXTO
</Box>
<Box className={styles.container}>
    <Box>
        <Button onClick={handlePropuesta}>PROPUESTA EDUCATIVA</Button>
        <Button onClick={handleOrientacion}>DEPARTAMENTO DE ORIENTACION</Button>
    </Box>
    <Box>
        {orientacion&&<Orientacion/>}
        {propuesta&&<Propuesta/>}
    </Box>
</Box>
</Box>)
}