import { Box, Typography } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
export default function Box6(){
    return(<Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', marginTop:'50px',marginBottom:'50px'}}>

       <Box sx={{marginTop:'20px',marginBottom:'20px'}}>
       <Typography variant="h5">COMEDOR <RestaurantIcon  fontSize='medium'/></Typography>
       </Box>
        <Typography>La empresa responsable de gestionar el servicio de comedor es TALOBA FOOD SERVICE. Para visualizar el MENU del mes, clickear aqui. </Typography>
        <MenuBookIcon fontSize='large'/>
    </Box>)
}