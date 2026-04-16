import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import ListaCita from "./Componentes/ListaCita";
import { useState } from "react";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    if (confirm("¿Eliminar esta cita?")) {
      setCitas(citas.filter(c => c.id !== id));
    }
  };
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita} />
          <ListaCita citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;