import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Condiciones (){
    return (<Box sx={{marginTop:'50px'}}>
        <Box sx={{marginBottom:'20px'}}><Typography variant='body2'><strong>CONDICIONES GENERALES</strong></Typography></Box>
        <Typography variant='body2'> <ArrowForwardIosIcon fontSize='small'/> Se entiende por cuota de escolaridad neta al importe que 
        resulte una vez descontados el fondo de becas, los materiales y el descuento por hermanos que le correspondan 
        a esa cuota. </Typography>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>Las bonificaciones no son trasladables a otros hermanos ni a otras familias.</Typography>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>La reinscripción o matrícula no gozará de bonificacion alguna.</Typography>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>Las bonificaciones no son acumulativas.</Typography>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>Las bonificaciones quedarán sin efecto en el caso de atraso en el pago de las cuotas mensuales por más de 60 (sesenta) días.</Typography>
        <Box sx={{marginBottom:'20px',marginTop:'20px'}}>
            <Typography variant="body2"><strong>CONDICIONES EXCLUSIVAS PARA PRESENTACION DE FAMILIAS</strong></Typography>
        </Box>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>Este formulario debe haber sido completado y firmado por la familia que presenta, sin excepción ,antes que la familia presentada visite por primera vez el colegio.</Typography>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>La familia presentada deberá completar y firmar este formulario al momento del alta de la familia en el colegio.</Typography>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>Las bonificaciones se harán efectivas a partir del momento en que los hijos de la familia presentada empiecen a cursar regularmente en el colegio.</Typography>
        <Typography variant='body2'><ArrowForwardIosIcon fontSize='small'/>Las bonificaciones quedarán sin efecto cuando la familia que fue presentada deje la institución por cualquier motivo</Typography>
    </Box>)
}