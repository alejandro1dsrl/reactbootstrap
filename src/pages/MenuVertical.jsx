// Importa componentes de estructura de navegación de React-Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

// Importa Link para permitir la navegación sin recargar la página
import { Link } from "react-router-dom";

export default function MenuVertical() {
  return (
    // Contenedor base para el menú lateral
    <Container>

    {/* Navbar: contenedor de navegación. bg="dark" (fondo negro), variant="dark" (texto claro), flex-column (orientación vertical) */}
        <Navbar bg="dark" variant="dark" className="flex-column p-3">

        {/* Navbar.Brand: Título o logo del menú. m-3: margen en todos los lados */}
        <Navbar.Brand className="m-3">Menu</Navbar.Brand>

        {/* Nav: grupo de enlaces. flex-column: asegura que los links se apilen verticalmente */}
        <Nav className="flex-column">

        {/* as={Link}: Propiedad clave que integra el estilo de Bootstrap con la lógica de React Router */}
            <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/inicio">InicioRB</Nav.Link>
            <Nav.Link as={Link} to="/card">Card</Nav.Link>
            <Nav.Link as={Link} to="/card">CardRB</Nav.Link>
        </Nav>
        </Navbar>
    </Container>
  );
}