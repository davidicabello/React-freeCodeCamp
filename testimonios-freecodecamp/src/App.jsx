import "./App.css";
import Testimonio from "./components/Testimonio.jsx";
import {
  testimonioDataOne,
  testimonioDataTwo,
  testimonioDataThree,
} from "./components/TestimoniosData.jsx";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio {...testimonioDataOne} />
        <Testimonio {...testimonioDataTwo} />
        <Testimonio {...testimonioDataThree} />
      </div>
    </div>
  );
}

export default App;
