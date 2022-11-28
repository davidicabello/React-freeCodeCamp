import "./App.css";
import Testimonio from "./components/Testimonio.jsx";
import { testimonios } from "./testimonios";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimonios.map((testimonios) => (
          <Testimonio
            nombre={testimonios.nombre}
            pais={testimonios.pais}
            imagen={testimonios.imagen}
            cargo={testimonios.cargo}
            empresa={testimonios.empresa}
            testimonio={testimonios.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
