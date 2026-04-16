import Input from "./Input";
import Boton from "./Boton";
import Titulo from "./Titulo.jsx";
import "./Formulario.css";
import { useState } from "react";

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("funciona");
    const nuevaCita = {
      id: Date.now(),
      mascota,
      dueno,
      fecha,
      hora,
      sintomas
    };
    agregarCita(nuevaCita);
  };

  return (
    <div className="one-half column">
      <Titulo texto="Crear mi Cita" tipo="h2" />

      <form onSubmit={handleSubmit}>
        <Input label="Nombre Mascota" name="mascota" value={mascota} onChange={(e) => setMascota(e.target.value)} />
        <Input label="Nombre Dueño" name="dueno" value={dueno} onChange={(e) => setDueno(e.target.value)} />
        <Input label="Fecha" tipo="date" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <Input label="Hora" tipo="time" name="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
        <Input label="Sintomas" tipo="textarea" name="sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;