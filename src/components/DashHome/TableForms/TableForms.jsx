// TableForms.js
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./TableForms.module.css";

export function TableForms({ forms }) {
 
  useEffect(() => {
  
  }, [forms]);

  return (
    <Box className={styles.tablecontainer}>
      
        {forms.length?<>
        <Typography variant="h5" component="p" className={styles.tabletitle}>
        Tus formularios</Typography>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pending</th>
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
              </tr>
            )
          })}
        </tbody>
          
      </table> </> :null
     }
     {!forms.length ?<Typography>No tienes formularios en la base de datos</Typography>:null}
    </Box>
  );
}