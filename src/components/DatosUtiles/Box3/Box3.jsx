import { Box, Typography } from "@mui/material"

export default function Box3 (){
    return(<Box sx={{backgroundColor:'primary.main'}} >
            <Box sx={{display:'flex',justifyContent:'center'}}>
            <Typography variant="h6" color='secondary' sx={{height:'200px'}} >
            DESCARGAS
            </Typography>
            </Box>
        </Box>)
}