import { TextField, Typography } from "@mui/material";

export default function ItemForm({ item }) {
  const { id, label, type } = item;

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
       case 'title':
        return(<Typography>
            {label}
        </Typography>)
      default:
        return <p>no se encontro type</p>;
    }
  };

  return getItem();
}

  
  
  
  