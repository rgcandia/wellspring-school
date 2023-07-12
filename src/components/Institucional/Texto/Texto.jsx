import { Box, Typography } from "@mui/material";
import styles from './Texto.module.css'
export default function Texto() {
    return (<Box className={styles.texto}>


        <Typography className={styles.titulo} component='h3' variant='h2' textAlign='center' >INSTITUCIONAL</Typography>



        <Box className={styles.box}>
            <Typography component='h6' variant='h5'>IDENTIDAD</Typography>
            <Typography component='p' variant='body1'>
                Wellspring School ofrece a sus alumnos, sin distinción de raza o creencias una educación laica,
                mixta y bilingüe basada en principios didácticos actualizados y una metodología activa personalizada que apunta a una formación integral.
            </Typography>
        </Box>

        <Box className={styles.box}>
            <Typography component='h6' variant='h5'>NUESTRO COMIENZO</Typography>
            <Typography component='p' variant='body1'>
                Fundado en el año 1992, nuestro Colegio ha sido diseñado y construido contemplando todas las necesidades de bienestar del alumno, en un entorno pensado para fomentar el acercamiento con la naturaleza.

                Los distintos sectores se han distribuido dentro de las 4 hectáreas del campus buscando que el asentamiento respetara el plácido entorno natural, evitando la centralización pero al mismo tiempo,
                contemplando en cada área las necesidades requeridas para su función específica
            </Typography>

        </Box>

        <Box className={styles.box}>
            <Typography component='h6' variant='h5'>IDEARIO</Typography>
            <Typography component='p' variant='body1'>
                Tenemos como propósito ofrecer a los alumnos una educación que oriente su desarrollo integral, físico y mental y que los estimule para que sus acciones tengan sentido en su vida y en la de la sociedad de la que forman parte, asumiendo actitudes de tolerancia, solidaridad y cooperación.

                Entendemos al alumno como protagonista de la enseñanza y del aprendizaje, para dar respuesta a sus intereses y necesidades mediante propuestas que, con la guía de sus maestros, permitan la construcción del conocimiento.

                Proponemos fortalecer el sentimiento de identidad, ser un centro de apertura, proponiendo proyectos culturales, sociales y deportivos de significación para la comunidad.
            </Typography>
        </Box>

        <Box className={styles.box}>
            <Typography component='h6' variant='h5'>INFRAESTRUCTURA</Typography>
            <Typography component='p' variant='body1'>
                El predio cuenta con amplias aulas climatizadas por medio de aire acondicionado y calefacción central, estacionamiento interno, sanitarios y oficinas destinados a los sectores de Inicial, Primaria y Secundaria. Además, laboratorio, sala de música y canto, arte, scenery club, computación, Smartboard, biblioteca y auditorio. Un amplio comedor, huerta para experiencias prácticas de Ciencias Naturales, patio cubierto destinado a actividades de Educación Física y cómodas áreas de amplios espacios verdes para los períodos de pausa, recreación y práctica deportiva. Todos los edificios del colegio se encuentran conectados en red y con acceso individual a Internet (WIFI).

                El campo de deportes está ubicado dentro del perímetro escolar evitando así el traslado de alumnos. Cuenta con un excelente acceso, asfalto en perfecto estado y seguridad las 24 hs.

                El diseño del campus del Colegio ha permitido combinar excelencia académica y práctica deportiva con un entorno saludable de acercamiento a la naturaleza.
            </Typography>
        </Box>


    </Box>)
}