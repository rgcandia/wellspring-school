import React from "react";
import { Link } from "react-router-dom";

export function TableForms({ forms }) {
  return (
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
  );
}