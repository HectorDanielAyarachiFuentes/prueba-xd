import { Header } from "./Components/Header";
import { Form } from "./Components/Form";
import { Historial } from "./Pages/Historial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Componente Principal que contiene Header y Form
function Principal() {
  return (
    <>
      <Header />
      <Form />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Principal />} />

          {/* Ruta para el historial */}
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
