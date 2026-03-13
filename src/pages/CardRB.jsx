import { Container, Card, Button } from "react-bootstrap";
import paisaje from '../assets/paisaje.png'

export default function CardRB() {
  return (
    
    // Contenedor principal alineado a la izquierda (text-start)
    <Container className="text-start">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={paisaje} />

        {/* Cuerpo de la tarjeta: añade relleno interno para los textos */}
        <Card.Body>

        {/* Título de la tarjeta con estilo de fuente resaltado */}
          <Card.Title>EJEMPLO</Card.Title>
          <Card.Text>Ejemplo Card Bootstrap</Card.Text>

          {/* Botón de acción: variant="dark" aplica color de fondo negro */}
          <Button variant="dark">Aceptar</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}