import DetalleCita from "./DetalleCita";
import Boton from "./Boton";
import "./Cita.css";

function Cita({id, mascota, dueno, fecha, hora, sintomas, eliminarCita}) {
  const handleEliminar = () => {
    eliminarCita(id);
  };

  return (
    <div className="cita">
      <DetalleCita etiqueta="Mascota" valor={mascota} />
      <DetalleCita etiqueta="Dueño" valor={dueno} />
      <DetalleCita etiqueta="Fecha" valor={fecha} />
      <DetalleCita etiqueta="Hora" valor={hora} />
      <DetalleCita etiqueta="Sintomas" valor={sintomas} />

      <Boton texto="Eliminar ×" clase="button eliminar u-full-width" onClick={handleEliminar} />
    </div>
  );
}

export default Cita;