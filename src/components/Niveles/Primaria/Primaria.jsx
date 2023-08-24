import { Typography , Box} from '@mui/material'
import flecha from '../../../images/niveles/flecha.png'
import ep1 from '../../../images/primaria/ep1.jpg'
import styles from './Primaria.module.css'
export default function Primaria(){
    return(<Box>
        <Box className={styles.texto}>
            <Box sx={{marginBottom:'15px',marginTop:'15px'}}>
                <Typography><strong>PRIMARIA</strong></Typography>
            </Box>
            <Box className={styles.subTitle}>
                <Box className={styles.flecha}>
                    <img
                    src={flecha}
                    alt='flecha'
                    loading='lazy'
                    />
                </Box>
                <Box><Typography color='primary.main'>
                <strong>1° A 6° AÑO - DOBLE JORNADA (TURNO MAÑANA EN CASTELLANO, TURNO TARDE EN INGLES)</strong>
                    </Typography></Box>
            </Box>
            <Box sx={{marginBottom:'15px'}}><Typography>Se implementan estrategias concernientes al desarrollo de alumnos autónomos, responsables y solidarios. </Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography>Contamos con actividades deportivas, artísticas, musicales y actorales.
                 El ámbito natural nos permite contar con una huerta para el dictado de clases complementarias con Ciencias Naturales, y así, 
                 crear una valoración del cuidado del medio ambiente y la ecología.
                 Además, se realizan actividades y proyectos complementarios como Feria de Ciencias, Feria del libro,         
                 Clases abiertas en Inglés y en Castellano, Drama Concerts, Assemblies de trabajo en valores, Book Fairs, 
                 visitas de compañías de teatro, talleres extra escolares, Creative writing competition, General Knowledge Competition,
                  Speaking Competition, visitas como el planetario móvil, taller de reciclaje y viajes educativos. Además, 
                  llevamos a cabo proyectos de ayuda en varias escuelas rurales apadrinadas por nosotros.</Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography>
                
            Se impulsa el uso del Inglés procurando la posibilidad de adquirir conocimientos significativos, 
            facilitando el aprendizaje a través de proyectos multidisciplinarios que armonizan y
            efectivizan la adquisición y la práctica de la lengua extranjera.
                </Typography></Box>
            <Box sx={{marginBottom:'15px'}} ><Typography>
                

            Se fomenta el uso de la Biblioteca a través del Reading Contest, Concurso de lectura,
            Storytelling (lectura de cuentos dentro de la Biblioteca) y Reading Groups (grupos de lectura en las clases).
                </Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography>
            Nuestros alumnos preparan además exámenes internacionales que les proporcionan experiencias eficaces 
            y anticipan vivencias similares a las que tendrán más tarde en la escuela Secundaria al rendir otros exámenes externos.
                </Typography></Box>
            <Box sx={{marginBottom:'15px'}}><Typography>
            Tenemos un gran respeto por la diversidad, lo que implica el conocimiento de cada uno de nuestros alumnos y sus necesidades, 
            determinando así, lo más conveniente para ellos.
                </Typography></Box>
        </Box>
        <Box className={styles.image}>
            <img
            src={ep1}
            alt='imagen chicos de primaria estudiando'
            loading='lazy'
            />
        </Box>
    </Box>)
}