import { Box , Typography, FormControlLabel,Checkbox, TextField, FormGroup, MenuItem} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
export default function TeatroForm(){
  //instancias
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
    dispatch(updateForm({ ...formData, teatro: {...formData.teatro,[id]: value } }));
  };
              //manejador de los check
  const handleCheckChange = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,[name]:checked}}))
  }            
  
  const handleChangeSelecFondo = (e)=>{
    
const {value,name} = e.target;
console.log(value)
dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[name]:value}}}))
              
  } 
    
  const handleChangeSobreEscenario =(e)=>{
    const {value,id} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[id]:value}}}))
  }

  const handleCheckChangeBajoEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[name]:checked}}}))
  }  
  return (<Box>
  <Box >
         <Typography><strong>Sección Teatro</strong></Typography>
 </Box>
    <Box>
    <FormControlLabel
      label='Padres'
      control={<Checkbox
        checked={formData?.teatro.padres || false}
        name='padres'
        onChange={handleCheckChange}
      />}
    />
    {
      formData.teatro.padres &&
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
      checked={formData?.teatro.alumnos || false}
      name='alumnos'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.teatro.alumnos&&
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
      checked={formData?.teatro.sobreEscenario || false}
      name='sobreEscenario'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.teatro.sobreEscenario &&
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
          <TextField
         id='lucesYPulsadores'
         type='number'
         label='Luces y pulsadores'
         fullWidth
         onChange={handleChangeSobreEscenario}
         />
          <FormControlLabel
      label='Pie de micrófono'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.pieMicrofono || false}
      name='pieMicrofono'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
          <FormControlLabel
      label='Proyector sobre escenario'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
        <FormControlLabel
      label='Puntero'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.puntero || false}
      name='puntero'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
 
 <FormControlLabel
      label='Pantalla'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.pantalla || false}
      name='pantalla'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    
      </Box>
    }
    </Box>

    <Box>
    <FormControlLabel
      label='Bajo el Escenario'
      control={<Checkbox
      checked={formData?.teatro.bajoEscenario || false}
      name='bajoEscenario'
      onChange={handleCheckChange}
      />}
    />
    </Box>

    </Box>
    
    

    
    
 

  </Box>)
}