import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function TableForms({ forms }) {
  useEffect(()=>{},[forms])
  return (
  <Box>
    <Typography variant='h5' component='p'>Tus formularios</Typography>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Pending</th>
        </tr>
      </thead>
      <tbody>
        {forms.map((form) => (
          <tr key={form.id}>
            <td>
              <Link to={`/formulario/${form.id}`}>{form.id}</Link>
            </td>
            <td>{form.pending ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Box>
  );
}