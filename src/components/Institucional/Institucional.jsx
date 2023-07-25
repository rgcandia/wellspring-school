import { Box, Button, Tab, Tabs } from '@mui/material'
import Propuesta from './Propuesta/Propuesta.jsx'
import Orientacion from './Orientacion/Orientacion.jsx'
import Texto from './Texto/Texto.jsx'
import { useState } from 'react'
import background from '../../images/institucional/institucional_background.jpg'
import styles from './Institucional.module.css'

export default function Institucional (){

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(<Box className={styles.institucional}>

<Box className={styles.image}>
  <img
  src={background}
  alt='background cabecera institucional'
  loading='lazy'
  />
 
</Box>
<Box className={styles.text}>
    <Texto/>
</Box>
<Box className={styles.container}>

     <Box  className={styles.box1} sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs centered={true} value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label='PROPUESTA EDUCATIVA' value='1'/>
        <Tab label='DEPARTAMENTO DE ORIENTACION' value='2'/>
    </Tabs>
   
    </Box>
    <Box className={styles.box2}  sx={{ borderBottom: 1, borderColor: 'divider' }} >
    <Tabs  orientation='vertical' value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label='PROPUESTA EDUCATIVA' value='1'/>
        <Tab label='DEPARTAMENTO DE ORIENTACION' value='2'/>
    </Tabs>
    </Box>
    
    <Box>
        {value==='2'&&<Orientacion/>}
        {value==='1'&&<Propuesta/>}
    </Box>

</Box>
{/* //fin */}
</Box>)
}