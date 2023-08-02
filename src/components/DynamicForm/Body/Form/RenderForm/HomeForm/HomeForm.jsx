import { Box, TextField} from "@mui/material";
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
  
  return (
    <Box className={styles.home}>
     <TextField
      id='email'
      type='email'
      label='Correo Electrónico'
      onChange={handleChange}
     />
     <TextField
     id='nombreCompleto'
     type='text'
     label='Nombre y Apellido'
     onChange={handleChange}
     />

    </Box>
  );
}
