import { useState } from "react";
import Cita from "./Cita";
import Titulo from "./Titulo.jsx";
import "./ListaCita.css";

function ListaCita({ citas, eliminarCita }) {


  return (
    <div className="one-half column lista-citas">
      <Titulo texto="Administra tus citas" tipo="h2" />

      {citas.map((cita) => (
        <Cita
          key={cita.id}
          id={cita.id}
          mascota={cita.mascota}
          dueno={cita.dueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          eliminarCita={eliminarCita}
        />
      ))}
    </div>
  );
}

export default ListaCita;