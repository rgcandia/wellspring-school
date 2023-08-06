import { Box , Typography, FormControlLabel,Checkbox, TextField, FormGroup, MenuItem} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './Otro.module.css'
export default function Otro(){
  //instanciase
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);
  const itemsFondoEscenario = [
    {name:'5 paneles',label:'5 paneles'},
    {name:'7 paneles',label:'7 paneles'},
    {name:'s/fondo',label:'sin fondo'}
  ]
  //funciones
              //funcion manejadora del dispatch 
  const handleChange = (e) => {
    const { value, id } = e.target;
    dispatch(updateForm({ ...formData, otro: {...formData.otro,[id]: value } }));
  };
              //manejador de los check
  const handleCheckChange = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,[name]:checked}}))
  }            
  
  const handleChangeSelecFondo = (e)=>{
    
const {value,name} = e.target;
console.log(value)
dispatch(updateForm({...formData,otro:{...formData.otro,dataSobreEscenario:{...formData.otro.dataSobreEscenario,[name]:value}}}))
              
  } 
    
  const handleChangeSobreEscenario =(e)=>{
    const {value,id} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,dataSobreEscenario:{...formData.otro.dataSobreEscenario,[id]:value}}}))
  }

  const handleCheckChangeSobreEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,dataSobreEscenario:{...formData.otro.dataSobreEscenario,[name]:checked}}}))
  }  
  const handleChangeBajoEscenario =(e)=>{
    const {value,id} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,dataBajoEscenario:{...formData.otro.dataBajoEscenario,[id]:value}}}))
  }
  const handleCheckChangeBajoEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,dataBajoEscenario:{...formData.otro.dataBajoEscenario,[name]:checked}}}))
  }  

  return (<Box>
  <Box >
         <Typography><strong>Sección Teatro</strong></Typography>
 </Box>
    <Box>
    <FormControlLabel
      label='Padres'
      control={<Checkbox
        checked={formData?.otro.padres || false}
        name='padres'
        onChange={handleCheckChange}
      />}
    />
    {
      formData.otro.padres &&
      <TextField
      id='cantidadPadres'
      type='number'
      label='Cantidad Padres'
      onChange={handleChange}
      fullWidth
      />
    }
    </Box>
    <Box>
    <FormControlLabel
      label='Alumnos'
      control={<Checkbox
      checked={formData?.otro.alumnos || false}
      name='alumnos'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.otro.alumnos&&
      <TextField
      id='cantidadAlumnos'
      type='number'
      label='Cantidad Alumnos'
      onChange={handleChange}
      fullWidth
      />
    }

    <Box>
    <FormControlLabel
      label='Sobre el Escenario'
      control={<Checkbox
      checked={formData?.otro.sobreEscenario || false}
      name='sobreEscenario'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.otro.sobreEscenario &&
      <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
         <TextField
         select
         name='fondoEscenario'
         label='Fondo de escenario blanco'
         onChange={handleChangeSelecFondo}
         fullWidth
         defaultValue='sin fondo'
         >
          <MenuItem value="5 paneles">5 paneles</MenuItem>
        <MenuItem value="7 paneles">7 paneles</MenuItem>
        <MenuItem value="sin fondo">sin fondo</MenuItem>
        
         </TextField>
         <TextField
         id="mesas"
         type='number'
         label='Sillas(cantidad)'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='Pupitres'
         type="number"
         label='Pupitres(cantidad)'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         select
         name='manteles'
         label='Manteles'
         fullWidth
         defaultValue='Ninguno'
         onChange={handleChangeSelecFondo}
         >
          <MenuItem value='Azul'>Azul</MenuItem>
          <MenuItem value='Blanco'>Blanco</MenuItem>
          <MenuItem value='Ninguno'>Ninguno</MenuItem>
         </TextField>
         <TextField
         id='sillas'
         type='number'
         label='Sillas'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='gradas'
         type='number'
         label='Gradas'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='micrófonoInalambrico'
         type='number'
         label='Micrófono inalámbrico (cantidad)'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
             <FormControlLabel
      label='Pie de micrófono'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.pieMicrofono || false}
      name='pieMicrofono'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
          <TextField
         id='lucesYPulsadores'
         type='number'
         label='Luces y pulsadores'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
           <TextField
         id='alargues'
         type='number'
         label='Alargues(cantidad)'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
      
          <FormControlLabel
      label='Proyector sobre escenario'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
        <FormControlLabel
      label='Puntero'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.puntero || false}
      name='puntero'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
 
 <FormControlLabel
      label='Pantalla'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.pantalla || false}
      name='pantalla'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
     <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
    
      </Box>
    }
    </Box>

    <Box>
    <FormControlLabel
      label='Bajo el Escenario'
      control={<Checkbox
      checked={formData?.otro.bajoEscenario || false}
      name='bajoEscenario'
      onChange={handleCheckChange}
      />}
    />
    {formData.otro.bajoEscenario &&
    <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}} className={styles.bajoEscenario}>
       <TextField
         id='pupitres'
         type='number'
         label='Pupitres (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='manteles'
         type='number'
         label='Manteles (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />
           <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='tarimas'
         type='number'
         label='Tarimas (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono Inalambrico (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />
          <FormControlLabel
      label='Proyector Arriba'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />

<FormControlLabel
      label='Fondo de prensa'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.fondoPrensa || false}
      name='fondoPrensa'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Alargue'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.alargue || false}
      name='alargue'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Aire Acondicionado'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.aireAcondicionado || false}
      name='aireAcondicionado'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Café'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.cafe || false}
      name='cafe'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Agua caliente'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.aguaCaliente || false}
      name='aguaCaliente'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Té'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.te || false}
      name='te'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Jarra con agua y hielo'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.jarraAguaHielo || false}
      name='jarraAguaHielo'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Azúcar'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.azucar || false}
      name='azucar'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Edulcorante'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.edulcorante || false}
      name='edulcorante'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Vasos plásticos (frio)'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.vasosPlasticos || false}
      name='vasosPlasticos'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    
    <FormControlLabel
      label='Vasos telgopor (calor)'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.vasosTelgopor || false}
      name='vasosTelgopor'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
  <FormControlLabel
      label='Vasos vidrio'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.vasoVidrio || false}
      name='vasoVidrio'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
      <FormControlLabel
      label='Batidores'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.batidores || false}
      name='batidores'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Servilleta'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.servilleta || false}
      name='servilleta'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    
    <TextField
         id='sandwichesMiga'
         type='number'
         label='Sandwiches de miga (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />
    <TextField
         id='medialunas'
         type='number'
         label='Medialunas (cantidad)'
         fullWidth
         onChange={handleChangeBajoEscenario}
         />

        <TextField
         id='musica'
         label='Música'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         helperText="En el caso de canciones patrias, aclarar cuáles son y el orden.
         Resto de la música entregar en pendrive en formato mp3, enumeradas conforme al orden en que serán 
         reproducidas en el acto"
         />
      <TextField
         id='video'
         label='Video o presentación'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         helperText="En el caso de utilizar proyector, entregar los archivos en pendrive en formato mp4(video)
          o pdf (presentacion power point). Si se llegara a usar más de un video, enumerarlos conforme
          al orden en que serán reproducidos en el acto"
         />
    <TextField
         id='observacionesComunicaciones'
         label='Observaciones Comunicaciones'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         />

          <TextField
         id='observacionesCocina'
         label='Observaciones Cocina'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         />
             <TextField
         id='observacionesCompras'
         label='Observaciones Compras'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         />
             <TextField
         id='observacionesMantenimiento'
         label='Observaciones Mantenimiento'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         />
    </Box>
    }
    
    </Box>
    </Box>
    
    

    
    
 

  </Box>)
}