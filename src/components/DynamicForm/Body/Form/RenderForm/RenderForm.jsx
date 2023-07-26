import { Box, Typography } from '@mui/material';
import Render from './Render/Render';
import styles from './RenderForm.module.css';

export default function RenderForm({ model }) {
  // Función para separar los elementos del modelo en dos grupos
  const separateArrays = (data) => {
    return data.reduce(
      (result, item) => {
        if (item.type === 'section') {
          result.sectionArray.push(item);
        } else {
          result.nonSectionArray.push(item);
        }
        return result;
      },
      { sectionArray: [], nonSectionArray: [] }
    );
  };

  const { sectionArray, nonSectionArray } = separateArrays(model);
  


  
  return (
    <Box className={styles.containerForm}>
     <Render model={nonSectionArray} />
     {sectionArray.map((section)=>{
      return(<Box>
        <Box sx={{display:'flex',justifyContent:'center'}}><Typography variant='h5'>{section.label}</Typography></Box>
        <Render model={section.data}/>
      </Box>)

     })}
    </Box>
  );
}
