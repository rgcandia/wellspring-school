import { useState } from "react";
import { TextField, Typography, FormGroup, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import styles from './ItemForm.module.css';

export default function ItemForm({ item }) {
  const { id, label, type, options } = item;
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const getItem = () => {
    switch (type) {
      case "email":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <TextField
              id={id}
              type="email"
              name={label}
              variant="outlined"
              className={styles["text-field"]}
            />
          </div>
        );
      case "text":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <TextField
              id={id}
              type="text"
              name={label}
              variant="outlined"
              className={styles.textfield}
            />
          </div>
        );
      case "select":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <FormGroup>
              <TextField
                id={id}
                select
                value={selectedValue}
                name={label} 
                variant="outlined"
                className={styles.selectfield}
                onChange={handleSelectChange}
              >
                {options.map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </div>
        );
        case "check":
          return (
            <div className={styles.itemformcontainer}>
              <label className={styles.label}>{label}</label>
              <FormGroup >
                {options.map((option) => (
                  <FormControlLabel
                    name={option}
                    key={option}
                    control={<Checkbox  />}
                    label={option}
                  />
                ))}
              </FormGroup>
            </div>
          );
      case "title":
        return (
          <Typography variant="h6" component="h5" className={styles.title}>
            {label}
          </Typography>
        );
      case "fecha":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <TextField
              id={id}
              type="date"
              name={label}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              className={styles.datefield}
            />
          </div>
        );
      default:
        return <p>No se encontró el tipo</p>;
    }
  };

  return getItem();
}
