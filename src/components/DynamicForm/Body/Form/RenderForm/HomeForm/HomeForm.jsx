import { Box, FormControlLabel, FormGroup, MenuItem, TextField, Typography,Checkbox} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './HomeForm.module.css'
export default function HomeForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);

  const handleChange = (e) => {
    const { value, id } = e.target;
    dispatch(updateForm({ ...formData, home: {...formData.home,[id]: value } }));
  };
  const handleChangeSelect = (e)=>{
    const {value,name} = e.target;
    dispatch(updateForm({ ...formData, home: {...formData.home,[name]: value } }));
  }
  const handleCheckChange = (event) => {
    const { name, checked } = event.target;
    dispatch(updateForm({ ...formData, home: { ...formData.home, lugar:{...formData.home?.lugar,[name]: checked} } }));
  };

  const lugares = [
    { name: "Teatro", label: "Teatro" },
    { name: "Tinglado", label: "Tinglado" },
    { name: "CampoDeporte", label: "Campo de Deporte" },
    { name: "Otro", label: "Otro" },
  ];
  return (
    <Box className={styles.home}>
     <TextField
      id='email'
      type='email'
      label='Correo Electrónico'
      value={formData.home.email || ""}
      onChange={handleChange}
      fullWidth
      required
     />
     <TextField
     id='nombreCompleto'
     type='text'
     label='Nombre y Apellido'
     value={formData.home.nombreCompleto || ""}
     onChange={handleChange}
     fullWidth
     required
     />
     
<TextField
id='nombreEvento'
type='text'
onChange={handleChange}
value={formData.home.nombreEvento || ""}
fullWidth
required
label='Nombre del Evento'
/>
        <TextField
        select
        name="sector"
        label='Sector'
        onChange={handleChangeSelect}
        value={formData?.home.sector || "Otro"}
        fullWidth 
        defaultValue="Otro"
        required
        
      >
        <MenuItem value="Kinder">Kinder</MenuItem>
        <MenuItem value="Primaria">Primaria</MenuItem>
        <MenuItem value="Secundaria">Secundaria</MenuItem>
        <MenuItem value="Administración">Administración</MenuItem>
        <MenuItem value="Otro">Otro</MenuItem>
      </TextField>
     
    <Box sx={{display:'flex', alignItems:'center',gap:'10px',width:'100%'}}>
     <Typography><strong>Fecha</strong></Typography> 
    <TextField
     id='fecha'
     type='date'
     value={formData.home.fecha || ""}
     onChange={handleChange}
     fullWidth
     required
     />
    </Box>
    <Box  sx={{display:'flex', alignItems:'center',gap:'10px',width:'100%'}}>
      <Typography>
        <strong>Hora</strong>
      </Typography>
    <TextField
    id="hora"
    type='time'
    value={formData.home.hora || ""}
    onChange={handleChange}
    fullWidth
    required
    />
    </Box>


<Box>
        <Typography><strong>Lugar</strong></Typography>
        <FormGroup>
          {lugares.map((lugar) => (
            <FormControlLabel
              key={lugar.name}
              control={
                <Checkbox
                  checked={formData?.home?.lugar?.[lugar.name] || false}
                  onChange={handleCheckChange}
                  name={lugar.name}
                />
              }
              label={lugar.label}
            />  
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
}
