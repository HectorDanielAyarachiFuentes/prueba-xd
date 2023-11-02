import React from "react";
export function Properties({ datos }) {
  return (
    <div>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select id="propiedad">
        <option selected disabled>
          ...
        </option>
        {datos.map((item, index) => (
          <option key={index} value={item.tipo}>
            {item.tipo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Properties;
