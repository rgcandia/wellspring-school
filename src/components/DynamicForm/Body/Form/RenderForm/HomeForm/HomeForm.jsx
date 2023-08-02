import { Box ,TextField  } from "@mui/material"
import {updateForm} from '../../../../../../redux/slice.js'
import { useDispatch, useSelector } from "react-redux";
const formData = useSelector((state) => state.data.form);
export default function HomeForm(){
  const dispatch = useDispatch();
  return (<Box>
    
    <h1>Home Form</h1>
   
    
  </Box>)
}