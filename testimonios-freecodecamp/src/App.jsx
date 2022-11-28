import "./App.css";
import Testimonio from "./components/Testimonio.jsx";
// import {
//   testimonioDataOne,
//   testimonioDataTwo,
//   testimonioDataThree,
// } from "./components/TestimoniosData.jsx";
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
        {/* <Testimonio {...testimonioDataOne} />
        <Testimonio {...testimonioDataTwo} />
        <Testimonio {...testimonioDataThree} /> */}
      </div>
    </div>
  );
}

export default App;
