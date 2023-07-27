import { useState } from "react";
import { useSelector } from "react-redux"; // Importa useSelector desde react-redux
import {
  Typography,
  TextField,
  Button,
  Box,
  MenuItem, // Importa MenuItem desde MUI
} from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { setForm } from "../../../socket.js";
import { alertSendFormOk } from "../../../services.js";
import styles from "./SendForm.module.css";

export default function Formulario() {
  const [email, setEmail] = useState("");
  const [selectedModel, setSelectedModel] = useState(""); // Nuevo estado local para el selector

  const { models } = useSelector((state) => state.data); // Obtén el array de modelos desde el estado global

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la acción que desees con el email y el modelo ingresado
    setForm(email, selectedModel);
    console.log(selectedModel)
    // Limpia los campos después de enviar el formulario
    setEmail("");
    setSelectedModel("");
    alertSendFormOk();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Nueva función para manejar el cambio de selección en el selector
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <Box className={styles.sendform}>
      <form onSubmit={handleSubmit}>
        <Box sx={{display:'flex'}}>
      <InsertDriveFileIcon/>
      <Typography variant='body1'>
          
          Enviar formulario
        </Typography>
        </Box>
        
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          select // Usa select en lugar de input
          label="Modelo"
          value={selectedModel}
          onChange={handleModelChange} // Llama a la función para manejar el cambio
          variant="outlined"
          fullWidth
          margin="normal"
          required
        >
           {models?.length > 0 ? (
    models.map((model) => (
      <MenuItem key={model.name} value={model.name}>
        {model.name}
      </MenuItem>
    ))
  ) : (
    <MenuItem value="">
      <em>No hay modelos disponibles</em>
    </MenuItem>
  )}
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </Box>
  );
}
