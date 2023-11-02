import React, { useState, useEffect } from "react";
import { Properties } from "./Form/Properties";
import { Location } from "./Form/Location";
import { Meters2 } from "./Form/Meters2";
import { Button } from "./Form/Button";
import { Price } from "./Form/Price";

export function Form() {
  const [ubicacionData, setUbicacionData] = useState([]);
  const [propiedadData, setPropiedadData] = useState([]);

  useEffect(() => {
    // Check local storage for existing data
    const storedUbicacionData = localStorage.getItem("ubicacionData");
    const storedPropiedadData = localStorage.getItem("propiedadData");

    if (storedUbicacionData && storedPropiedadData) {
      setUbicacionData(JSON.parse(storedUbicacionData));
      setPropiedadData(JSON.parse(storedPropiedadData));
    } else {
      // If no data is in local storage, fetch it from "datos.json"
      fetch("datos.json")
        .then((response) => response.json())
        .then((data) => {
          const ubicacion = data.filter((item) => item.categoria === "ubicacion");
          const propiedad = data.filter((item) => item.categoria === "propiedad");

          setUbicacionData(ubicacion);
          setPropiedadData(propiedad);

          // Store data in local storage
          localStorage.setItem("ubicacionData", JSON.stringify(ubicacion));
          localStorage.setItem("propiedadData", JSON.stringify(propiedad));
        })
        .catch((error) => console.error("Error al cargar los datos", error));
    }
  }, []);

  return (
    <div className="center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <Properties datos={propiedadData} />
      <Location datos={ubicacionData} />
      <Meters2 />
      <Button />
      <Price />
    </div>
  );
}

export default Form;
