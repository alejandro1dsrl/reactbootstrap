import { Container, Button } from "react-bootstrap";

export default function InicioRB() {
  return (

    // Container: envuelve el contenido. border-primary (borde azul), p-3 (espaciado interno), text-start (alineado izquierda)
    <Container className="border border-primary  p-3 text-start">

    {/* Button: Componente botón. variant="danger": propiedad que aplica el color rojo (peligro) */}
      <h1 className="text-success">React Bootstrap</h1>

      {/* Button: Componente botón. variant="danger": propiedad que aplica el color rojo (peligro) */}
      <Button variant="danger">Aceptar</Button>
    </Container>
  );
}