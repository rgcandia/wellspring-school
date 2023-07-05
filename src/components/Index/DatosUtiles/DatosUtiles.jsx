import { Box, Typography } from "@mui/material";
import {getIcons} from './services.js'
export default function DatosUtiles (){
    return(<Box sx={{backgroundColor:'primary.main'}}>
        <Typography>DATOS UTILES</Typography>
         <Box>
            {getIcons.map(e=>{
                return<img key={e.path} alt={e.path} src={e.path}/>
            })}
         </Box>
    </Box>)
}