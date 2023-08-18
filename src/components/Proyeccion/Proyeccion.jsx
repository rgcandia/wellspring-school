import { Box, Typography } from '@mui/material'
import imagen from '../../images/proyeccion/proyeccion_comunitaria.jpg'
import styles from './Proyeccion.module.css'
export default function Proyeccion (){
    return(<Box>
        <Box className={styles.image}>
            <img
            src={imagen}
            alt='Imagen de profesor tocando violion a los alumnos'
            loading='lazy'
            />
        </Box>
        <Box>
            <Box sx={{display:'flex',justifyContent:'center'}}><Typography variant='h6' commponet='h4'>PROYECCION COMUNITARIA</Typography></Box>
            <Box>
                
            <Box sx={{marginBottom:'15px'}}><Typography variant='body2' component='h5'><strong>PROYECTO DEPORTIVO:</strong></Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography variant='body2' component='p' >
                
            Los deportes realizados en nuestro Colegio son Hockey, Rugby, Softball, Football, Volleyball, Athletics, Handball y Basketball.
             Esta variedad en la práctica deportiva permite una formación motriz completa, contribuye al desarrollo físico, psíquico y social de los alumnos. 
             Una gran variedad de disciplinas y la adquisición de habilidades tácticas y estratégicas fomentan a una actitud de juego limpio entre compañeros y adversarios,
             acompañado de torneos y competencias con otras instituciones educativas.
                </Typography>
                </Box> 
                <Box sx={{marginBottom:'15px'}}>
                    <Typography variant='body2' component='p'>Organizamos a nuestros alumnos en tres houses: Earth, Wind y Fire, 
                        ya que estos espacios nos permiten alentar la identidad y la pertenencia.</Typography>
                        </Box>
          </Box>
            <Box>
                <Box sx={{marginBottom:'15px'}}><Typography variant='body2' component='h5'><strong>PROYECTO CULTURAL:</strong></Typography></Box>
                <Box sx={{marginBottom:'15px'}}>
                    <Typography variant='body2' component='p'>› Ajedrez.</Typography>
                    <Typography variant='body2' component='p'>› Música, Coro, Drama, Coreografía y Banda. Proyecto Bilingüe de Música para 4o, 5o y 6° Año EP (articu- lación con los Workshops de Secundaria).</Typography>
                    <Typography variant='body2' component='p'>› Olimpiadas matemáticas Nandu (5° y 6o Año EP).</Typography>
                    <Typography variant='body2' component='p'>› Proyecto Robótica para 4o, 5o y 6o Año EP, durante clases de Computación.</Typography>
                    <Typography variant='body2' component='p'>› Rock and Learn (1o a 6o Año EP): Posibilidad de aprender a tocar un instrumento entre la variedad de seis que presentan. Un mediodía a la semana se dicta la clase.</Typography>
                    <Typography variant='body2' component='p'>› Arte, Escultura en Alambre, Biblioteca, Laboratorio de Ciencias, Smartboard y Scenery Club.</Typography>
                    <Typography variant='body2' component='p'>› Debate, Computación.</Typography>
                    <Typography variant='body2' component='p'>› Proyectos transversales a las diferentes asignaturas tanto en Castellano como en Inglés.</Typography>
                    <Typography variant='body2' component='p'>› Charla TED-Ed.</Typography>
                    <Typography variant='body2' component='p'>› Ecología: Desde K3 a 3o Año EP. Proyectos: reciclado, huerta, cuidado del medio ambiente, etc.</Typography>
                    <Typography variant='body2' component='p'>› Talleres Extracurriculares para Primaria (fuera del horario escolar).</Typography>
                    <Typography variant='body2' component='p'>› Competencias deportivas intercolegiales.</Typography>
                    <Typography variant='body2' component='p'>› Book Fairs / Feria del Libro.</Typography>
                    <Typography variant='body2' component='p'>› Encuentro intercolegial "Programa Uniendo Metas" de la Universidad del Salvador.</Typography>
                    <Typography variant='body2' component='p'>› Salidas educativas y viajes de estudio nacionales e internacionales.</Typography>
                    <Typography variant='body2' component='p'>› Participación en Peace One Day, evento que promueve la paz mundial.</Typography>
                    </Box>

                    <Box>
                        <Box sx={{marginBottom:'15px'}}><Typography variant='body2' component='h5'><strong>PROYECTO SOLIDARIO:</strong></Typography></Box>
                        <Box sx={{marginBottom:'15px'}}>

                            <Typography variant='body2' component='p'>Nuestro colegio propone desde su ideario, la formación integral de las personas, desde el aspecto académi- co como también la formación en valores que engrandecen al ser humano.
                                 La honestidad, solidaridad, libertad, justicia y responsabilidad son algunos de los destacados.</Typography>
                        </Box>
                          <Box sx={{marginBottom:'15px'}}>
 
                            <Typography variant='body2' component='p'>Por este motivo trabajamos con la colaboración de nuestra comunidad educativa, juntando alimentos no perecederos, útiles escolares, libros, ropa, juguetes y otros elementos de necesidad
                                para llevar a cabo los siguientes proyectos solidarios:</Typography>
                        </Box>
                        <Box sx={{marginBottom:'40px',display:'flex', flexDirection:'column',gap:'10px'}}>

                        <Typography variant='body2' component='p'>› Proyecto Escuela ahijada: Brindamos ayuda a diversas escuelas estatales de nuestro país a fin de posibilitar la asistencia segura a clases.</Typography>
                        <Typography variant='body2' component='p'>› Proyecto Mantas: Consiste en la recolección de cuadrados tejidos para realizar mantas de abrigo, que serán donadas a nuestras escuelas apadrinadas u otras instituciones.</Typography>
                        <Typography variant='body2' component='p'>› Proyecto "Una planta por un alimento": Desarrollamos una campaña solidaria donde invitamos a toda nuestra comunidad a colaborar a cambio de una planta cultivada en nuestra huerta.</Typography>
                        <Typography variant='body2' component='p'>› Proyecto Tapitas para el Garraham: La campaña de Tapitas tiene como objetivo donar la mayor cantidad de tapitas y papel para que de esta manera, el hospital obtenga recursos económicos</Typography>
                        </Box>

                    </Box>
            </Box>

        </Box>
    </Box>)
}