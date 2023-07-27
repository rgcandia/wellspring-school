import React, { useState } from 'react';
import { Box, Button, Typography, TextField, MenuItem, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import {updateForm} from '../../../../../socket.js'
import styles from './RenderForm.module.css'; // Importar los estilos
import { useSelector } from 'react-redux';
import {alertSendFormOk} from '../../../../../services.js'
import { useNavigate,useParams } from 'react-router-dom';

export default function RenderForm({handleClose}) {
  const { id } = useParams();
  const navigate = useNavigate()
  const {user,forms} = useSelector(state=>state.data)
  const selectedForm = forms?.find(e=>e.id==id)
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    sector: '',
    fecha: '',
    nombreEvento: ''
  });
  const [formData2,setFormData2] = useState({
    cantidadPadres:'',
    cantidadAlumnos:'',
    fondoEscenarioBlanco:'',
    mesas:'',
    pupitres:'',
    sillas:'',
    gradas:'',
    tarimas:'',
    mantel:'',
    microfono:'',
    videoPresentacion:'',
   

})
  const [section1Enabled, setSection1Enabled] = useState(true);
  const [checkedOptions, setCheckedOptions] = useState({});
  const [isTeatroChecked, setIsTeatroChecked] = useState(false);
  const [isSection2Enabled, setIsSection2Enabled] = useState(false);
  const [checkedOptionsSelect1, setCheckedOptionsSelect1] = useState({});
  const [checkedOptionsSelect2, setCheckedOptionsSelect2] = useState({});
  const [checkedOptionsSelect3, setCheckedOptionsSelect3] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setFormData2((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const handleCheckboxChangeSelect1 = (event)=>{
    const { name, checked } = event.target;
    setCheckedOptionsSelect1((prevCheckedOptions) => ({
      ...prevCheckedOptions,
      [name]: checked
    }));
  }
  const handleCheckboxChangeSelect2 = (event)=>{
    const { name, checked } = event.target;
    setCheckedOptionsSelect2((prevCheckedOptions) => ({
      ...prevCheckedOptions,
      [name]: checked
    }));
  }
  const handleCheckboxChangeSelect3 = (event)=>{
    const { name, checked } = event.target;
    setCheckedOptionsSelect3((prevCheckedOptions) => ({
      ...prevCheckedOptions,
      [name]: checked
    }));
  }
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedOptions((prevCheckedOptions) => ({
      ...prevCheckedOptions,
      [name]: checked
    }));
    if (name === 'Teatro') {
      setIsTeatroChecked(checked);
    }
  };

  const handleNextButtonClick = () => {
    if (isTeatroChecked) {
      setIsSection2Enabled(true);
      setSection1Enabled(false);
    }
  };

  const handleBackButtonClick = () => {
    setIsSection2Enabled(false);
    setSection1Enabled(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a donde desees
    
    const form = [{
      id:'main',
      data:{ ...formData, lugar: Object.keys(checkedOptions).filter((key) => checkedOptions[key]) }
    },
  {
    id:'teatro',
    data:{...formData2,section1:Object.keys(checkedOptionsSelect1).filter((key) => checkedOptionsSelect1[key]),
      section2:Object.keys(checkedOptionsSelect2).filter((key) => checkedOptionsSelect2[key]),
      section3:Object.keys(checkedOptionsSelect3).filter((key) => checkedOptionsSelect3[key]) }
  }
]

//envio la data
updateForm({id:selectedForm?.id,form,user});
handleClose();
alertSendFormOk();

  };

  const options = ['Teatro', 'Tinglado', 'Campo de deporte', 'Otro'];
  
  return (
    <Box className={styles.containerForm} component="form" onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>Solicitud de Evento</Typography>
      </Box>
     

      {section1Enabled && (
        <Box className={styles.section1}>
          <TextField
            label='Nombre'
            type='text'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label='Correo electrónico'
            type='email'
            name='correo'
            value={formData.correo}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label='Indicar sector'
            name='sector'
            select
            value={formData.sector}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value='Kinder'>Kinder</MenuItem>
            <MenuItem value='Primaria'>Primaria</MenuItem>
            <MenuItem value='Secundaria'>Secundaria</MenuItem>
            <MenuItem value='Administración'>Administración</MenuItem>
            <MenuItem value='Otro'>Otro</MenuItem>
          </TextField>
          <TextField
            type='date'
            name='fecha'
            value={formData.fecha}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label='Nombre del evento'
            type='text'
            name='nombreEvento'
            value={formData.nombreEvento}
            onChange={handleChange}
            required
            fullWidth
          />

          <Box>
            <Typography variant='h6'>Lugar</Typography>
            <FormGroup className={styles.checkboxGroup}>
              {options.map((option) => (
                <FormControlLabel
                  name={option}
                  key={option}
                  control={<Checkbox checked={checkedOptions[option] || false} onChange={handleCheckboxChange} />}
                  label={option}
                  className={styles.checkboxItem}
                />
              ))}
            </FormGroup>
          </Box>
        </Box>
      )}

{isSection2Enabled && (
  <Box className={styles.section2}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h5'>Sección Teatro</Typography>
    </Box>
    
      {/* Campos de texto */}
      <TextField
        label='Cantidad de padres'
        type='number'
        name='cantidadPadres'
        value={formData2.cantidadPadres}
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Cantidad de alumnos'
        type='number'
        name='cantidadAlumnos'
        value={formData2.cantidadAlumnos}
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Fondo de escenario blanco'
        name='fondoEscenarioBlanco'
        select
        value={formData2.fondoEscenarioBlanco}
        onChange={handleChange2}
        fullWidth
      >
        <MenuItem value='0'>none</MenuItem>
        <MenuItem value='5 paneles'>5 paneles</MenuItem>
        <MenuItem value='7 paneles'>7 paneles</MenuItem>
      </TextField>
      {/* Otros campos de número */}
      <TextField
        label='Mesas'
        type='number'
        name='mesas'
        value={formData2.mesas}
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Pupitres'
        type='number'
        name='pupitres'
        value={formData2.pupitres }
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Sillas'
        type='number'
        name='sillas'
        value={formData2.sillas}
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Gradas'
        type='number'
        name='gradas'
        value={formData2.gradas}
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Tarimas'
        type='number'
        name='tarimas'
        value={formData2.tarimas}
        onChange={handleChange2}
        fullWidth
      />
      {/* Campos de checkboxes */}
      <Box>
        <Typography variant='h6'>Selector1</Typography>
        <FormGroup className={styles.checkboxGroup}>
          {["Pantalla", "Proyector arriba(proyecta en el medio del escenario)", "Proyector abajo (proyecta en un costado)", "Luces y pulsadores", "Fondo de prensa"].map((option) => (
            <FormControlLabel
              name={option}
              key={option}
              control={<Checkbox checked={checkedOptionsSelect1[option] || false} onChange={handleCheckboxChangeSelect1} />}
              label={option}
              className={styles.checkboxItem}
            />
          ))}
        </FormGroup>
      </Box>
      <TextField
        label='Mantel'
        type='number'
        name='mantel'
        value={formData2.mantel}
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Micrófono'
        type='number'
        name='microfono'
        value={formData2.microfono}
        onChange={handleChange2}
        fullWidth
      />
      <TextField
        label='Video o presentación'
        type='text'
        name='videoPresentacion'
        value={formData2.videoPresentacion}
        onChange={handleChange2}
        fullWidth
      />
      <Box>
        <Typography variant='h6'>Selector2</Typography>
        <FormGroup className={styles.checkboxGroup}>
          {["Computadora", "Escudo del colegio", "Aire acondicionado", "Puntero"].map((option) => (
            <FormControlLabel
              name={option}
              key={option}
              control={<Checkbox checked={checkedOptionsSelect2[option] || false} onChange={handleCheckboxChangeSelect2} />}
              label={option}
              className={styles.checkboxItem}
            />
          ))}
        </FormGroup>
      </Box>
      <Box>
        <Typography variant='h6'>Selector3</Typography>
        <FormGroup className={styles.checkboxGroup}>
          {["Café", "Agua caliente", "Jarra con agua", "Azúcar", "Edulcorante", "Vasos plásticos (frio)", "Vasos telgopor (calor)", "Vaso vidrio", "Jarra", "Batidores", "Servilleta", "Hielo"].map((option) => (
            <FormControlLabel
              name={option}
              key={option}
              control={<Checkbox checked={checkedOptionsSelect3[option] || false} onChange={handleCheckboxChangeSelect3} />}
              label={option}
              className={styles.checkboxItem}
            />
          ))}
        </FormGroup>
      </Box>
    
  </Box>
)}

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {section1Enabled && (
          <Button type='submit' variant='contained' color='primary' className={styles.button}>
            Enviar
          </Button>
        )}
        {!isSection2Enabled && isTeatroChecked && (
          <Button onClick={handleNextButtonClick}>Sección Teatro</Button>
        )}
        {isSection2Enabled && (
          <Button onClick={handleBackButtonClick}>Volver</Button>
        )}
      </Box>
    </Box>
  );
}