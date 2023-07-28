import { useState } from 'react';
import { Box, Tabs,Tab } from '@mui/material'
import Bonificaciones from './Bonificaciones';
import Condiciones from './Condiciones';
import styles from './Box5.module.css'
export default function Box5(){
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(<Box sx={{paddingRight:'10%',paddingLeft:'10%',backgroundColor:'secondary.main'}}>
       <Box>
       <Tabs centered={true} value={value} onChange={handleChange}>
        <Tab label='CONDICIONES' value='1'/>
        <Tab label='BONIFICACIONES' value='2'/>
        </Tabs>
       </Box>
       <Box>
        {value ==='2'&&<Bonificaciones/> }
        {value==='1'&&<Condiciones/>}
       </Box>



    </Box>)
}