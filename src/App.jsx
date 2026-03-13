import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// IMPORTACIÓN DE COMPONENTES CREADOS (PÁGINAS)
import MenuVertical from "./pages/MenuVertical";
import InicioRB from "./pages/InicioRB";
import CardRB from "./pages/CardRB";

function App() {
  return (
    /* <Router>: Es el componente padre que habilita el uso de rutas en toda la aplicación. */
    <Router>
      <Container fluid className="p-0">
        <Row>
          
          {/* Columna lateral: ocupa 2/12 partes, fondo oscuro, alto total pantalla */}
          <Col md={2} className="bg-dark min-vh-100">
            <MenuVertical />
          </Col>
          
          {/* Columna de contenido: espacio restante con relleno interno de nivel 4 */}
          <Col className="p-4">
            <Routes>
            {/*Rutas */}
              <Route path="/inicio" element={<InicioRB />}/>
              <Route path="/card" element={<CardRB />} />
              <Route path="/" element={<InicioRB />} />
            </Routes>
          </Col>

        </Row>
      </Container>
    </Router>
  );
}

export default App;