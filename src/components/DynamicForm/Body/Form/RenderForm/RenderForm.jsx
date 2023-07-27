import { Box, Typography } from '@mui/material';
import Render from './Render/Render';
import styles from './RenderForm.module.css';

export default function RenderForm({ model }) {
 
  return (
    <Box className={styles.containerForm}>
     {/* <Render model={nonSectionArray} />
     {sectionArray.map((section)=>{
      return(<Box>
        <Box sx={{display:'flex',justifyContent:'center'}}><Typography variant='h5'>{section.label}</Typography></Box>
        <Render model={section.data}/>
      </Box>)

     })} */}
    </Box>
  );
}
