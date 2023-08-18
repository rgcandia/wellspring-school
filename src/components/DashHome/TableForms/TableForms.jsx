// TableForms.js
import { Box, Button, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFormPending } from "../../../socket";
import { alertDeleteFormPending,alertErrorDeleteFormPending } from "../../../services";
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import styles from "./TableForms.module.css";
import CreateForm from "../CreateForm/CreateForm";

export function TableForms({ forms }) {
 const {models,user} = useSelector(state=>state.data)
 const dispatch = useDispatch()
  useEffect(() => {
   
    
  }, [forms]);
const handleDelete = (id,user)=>{
const form = forms.find((e)=>{return e.id===id})
 if(form.pending){
  deleteFormPending(id,user)
  alertDeleteFormPending();
 }else{
  alertErrorDeleteFormPending();
 }


}
  return (
    <Box className={styles.tablecontainer}>
    
        {forms.length?<>
        <Box sx={{display:'flex'}}>
               <ListIcon/>
               <Typography variant="body1" component="p" className={styles.tabletitle}>
        Tus formularios</Typography>
        </Box>
        <Box sx={{width:'100%'}}>
        <CreateForm/>
      </Box>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pending</th>
            <th>Creation date</th>
            <th>Model</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => {
          
            return (
              <tr
              key={form.id}
                className={form.pending ? styles.pendingRow : null}
                >
                <td>
                  <Link
                    to={`formulario/${form.id}`}
                    className={styles.link}
                    >
                    {form.id}
                  </Link>
                </td>
                <td>{form.pending ? "Yes" : "No"}</td>
                <td>{form.createdAt.split("T")[0]}</td>
                <td>{models?models.find(e=>e.id==form.model).name:form.model}</td>
                <td><Button onClick={()=>{handleDelete(form.id,user)}}><DeleteForeverIcon/></Button></td>
              </tr>
            )
          })}
        </tbody>
          
      </table> </> :null
     }
     {!forms.length  ?<>
      <Box sx={{width:'100%'}}>
      <Box sx={{width:'100%'}}>
        <CreateForm/>
        
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <Typography>No tienes formularios en la base de datos</Typography>
      <Typography>Para crear un formulario nuevo, haz click en el botón del signo más.</Typography>
      </Box>
      </Box>
     </>:null}
     
    </Box>
  );
}