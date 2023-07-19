import  { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import {setForm} from '../../../../socket.js'
export default function Formulario() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la acción que desees con el email ingresado
    setForm(email);
    // Limpia el campo de email después de enviar el formulario
    setEmail("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Enviar formulario
      </Typography>
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
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}
