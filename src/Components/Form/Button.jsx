import Swal from "sweetalert2";
export function Button() {
  { /* SWEETALERT */ }
  const alerta = (titulo, mensaje, icono) => {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 3500,
      width: "240px",
    });
  };
  return (
    <div className="center separador">
      <button onClick={alerta}>Cotizar</button>
    </div>
  );
}

export default Button;