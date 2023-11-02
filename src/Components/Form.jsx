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
    const fetchData = async () => {
      try {
        // Check local storage for existing data
        const storedUbicacionData = localStorage.getItem("datosvivienda_ubicacion");
        const storedPropiedadData = localStorage.getItem("datosvivienda_propiedad");

        if (storedUbicacionData && storedPropiedadData) {
          setUbicacionData(JSON.parse(storedUbicacionData));
          setPropiedadData(JSON.parse(storedPropiedadData));
        } else {
          // If no data is in local storage, fetch it from "datos.json"
          const response = await fetch("/src/Components/datos.json");
          if (!response.ok) {
            throw new Error("Error al cargar los datos");
          }

          const data = await response.json();
          const ubicacion = data.filter((item) => item.categoria === "ubicacion");
          const propiedad = data.filter((item) => item.categoria === "propiedad");

          setUbicacionData(ubicacion);
          setPropiedadData(propiedad);

          // Store data in local storage with the new name
          localStorage.setItem("datosvivienda_ubicacion", JSON.stringify(ubicacion));
          localStorage.setItem("datosvivienda_propiedad", JSON.stringify(propiedad));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
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
