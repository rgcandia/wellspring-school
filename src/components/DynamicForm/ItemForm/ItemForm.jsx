import { TextField, Typography, FormGroup, MenuItem } from "@mui/material";

export default function ItemForm({ item }) {
  const { id, label, type, options } = item;

  const getItem = () => {
    switch (type) {
      case "email":
        return (
          <TextField
            id={id}
            label={label}
            type="email"
            name={label}
            variant="outlined"
          />
        );
      case "text":
        return (
          <TextField
            id={id}
            label={label}
            type="text"
            name={label}
            variant="outlined"
          />
        );
      case "select":
        return (
          <FormGroup>
            <TextField
              id={id}
              select
              label={label}
              name={label}
              variant="outlined"
            >
              {options.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
        );
      case "title":
        return (
          <Typography variant="h6" component="div">
            {label}
          </Typography>
        );
      case "fecha":
        return (
          <TextField
            id={id}
            label={label}
            type="date"
            name={label}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        );
      default:
        return <p>No se encontró el tipo</p>;
    }
  };

  return getItem();
}
  