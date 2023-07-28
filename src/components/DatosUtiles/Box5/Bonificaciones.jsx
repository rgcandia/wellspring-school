import { Box, Typography } from "@mui/material"
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
export  default function Modificaciones(){
    return (<Box  sx={{marginTop:'50px'}}>
                <Typography>
                    En la búsqueda de una mejora continua y trabajando para brindarles mayores beneficios a quienes integran
                    la Comunidad Wellspring, nos es muy grato presentarles el plan de promociones para el Cliclo Lectivo 2019.
                    Para hacer efectivas estas Bonificaciones, deberán acercarse a la Administración y completar el formulario correspondiente.
                </Typography>
               <Box sx={{marginTop:'20px'}}>
               <Box sx={{display:'flex',flexDirection:'row'}}>
                <LooksOneIcon/>
                    <Typography>
                            BONIFICACION EN K1, K2, K3 Y K4:
                    </Typography>
                    
                </Box>
                <Typography>
                    Bonificación del 20% sobre la cuota de escolaridad neta de cada alumno que esté cursando K1, K2, K3, Y/o K4 para aquellas familias que tengan, además, uno o más hijos desde sala de 5 (K5)
                    hasta 6to año de la Escuela Secundaria.
                </Typography>
               </Box>
                <Box >
                <Box sx={{display:'flex',flexDirection:'row',marginTop:'20px'}}><LooksTwoIcon/>
                    <Typography>
                        PRESENTACION DE FAMILIAS:
                    </Typography></Box>
                    <Typography>
                        <strong>La familia que presenta debe completar y firmar el formulario en la administración, sin excepción, antes de que la familia presentada visite por primera vez el colegio.</strong>
                    </Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',marginTop:'20px'}}>
                <Looks3Icon/>
                    <Typography>
                        BONIFICACION PARA HIJOS DE EGRESADOS WELLSPRING:
                    </Typography>
                </Box>
    </Box>)
}