import { Box, Typography } from "@mui/material"
import styles from './Box2.module.css'
export default function Box2 (){
    return<Box className={styles.box2}>
        <Typography variant='h5'>DATOS UTILES</Typography>
        <Typography variant='body2'>Para poder visualizar los archivos, deberá tener instalado en su computadora el programa Acrobat Reader.
            En caso de que no lo tenga,puede descargarlo gratuitamente en este link
        </Typography>
        <Typography component='a' href="http://get.adobe.com/reader">
        http://get.adobe.com/reader
        </Typography>
        <Typography variant='body2'>
            Haga click en el archivo que desea descargar en su computadora
        </Typography>
        <Typography variant='overline' component='strong' >
            informacion obsoleta !
        </Typography>
    </Box>
}