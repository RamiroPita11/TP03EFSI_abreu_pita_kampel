import Input from "./Input";
import Boton from "./Boton";
import Titulo from "./Titulo.jsx";
import "./Formulario.css";

function Formulario() {
  return (
    <div className="one-half column">
      <Titulo texto="Crear mi Cita" tipo="h2" />

      <form>
        <Input label="Nombre Mascota" name="mascota" />
        <Input label="Nombre Dueño" name="dueno" />
        <Input label="Fecha" tipo="date" name="fecha" />
        <Input label="Hora" tipo="time" name="hora" />
        <Input label="Sintomas" tipo="textarea" name="sintomas" />

        <Boton texto="Agregar Cita" tipo="submit" clase="u-full-width button-primary" />
      </form>
    </div>
  );
}

export default Formulario;