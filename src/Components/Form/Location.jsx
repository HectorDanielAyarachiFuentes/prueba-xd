import React from "react";
export function Location({ datos }) {
  return (
    <div>
      <label htmlFor="ubicacion">Selecciona su ubicación</label>
      <select id="ubicacion">
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

export default Location;
