import { useState } from "react";
import { CheckBox } from "@mui/icons-material";
import { Box, TextField, FormControlLabel, Checkbox } from "@mui/material";

export default function TingladoForm() {
  const [formData, setFormData] = useState({
    cantidadPadres: "",
    cantidadAlumnos: "",
  });

  const [onStage, setOnStage] = useState(false);
  const [underStage, setUnderStage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Box>
      <TextField
        label="Cantidad de padres"
        type="number"
        name="cantidadPadres"
        value={formData.cantidadPadres}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Cantidad de alumnos"
        type="number"
        name="cantidadAlumnos"
        value={formData.cantidadAlumnos}
        onChange={handleChange}
        required
        fullWidth
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={onStage}
            onChange={(e) => setOnStage(e.target.checked)}
          />
        }
        label="Sobre el Escenario"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={underStage}
            onChange={(e) => setUnderStage(e.target.checked)}
          />
        }
        label="Bajo el Escenario"
      />
    </Box>
  );
}
