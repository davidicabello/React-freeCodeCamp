//Coponente funcional

function Saludo(props) {
  return <h1>¡Hola, {props.nombre}!</h1>;
}

//Componente de clase debe tener un metodo render para definir que es lo que se va a mostrar y puede recibir valores (props)
//Cuando usamos una clase debemos usar .this

class Saludo extends React.Component {
  render() {
    return <h1>¡Hola, {this.props.nombre}!</h1>;
  }
}

//Estado : Representacion en javascript del conjunto de propiedades

// Conceptos importante:
// Componente
// props
// Estado 
// Hooks
// EvenListener

//JSX es una EXTENSION DE REACT PARA LA SINTAXIS DE JAVASCRIPT, nOS PERMITE DESCRIBIR EN JS COMO SE VERAN LOS COMPONENTES USANDO UNA ESCRUCTURA SIMILAR A HTML
// VENTAJAS : ESCTRUCTURAS MAS FACILES DE VISIALIZAR. ERRRORES Y ADVENTENCIAS MAS UTILES

//EJEMPLO ELEMENTO JSX

const elemento = <h1>Hola mundo!</h1>

//Elementos , unidades mas peque;as en react. defininen lo que se ven en la pantalla.
//Los componentes en react estan hechos de elementos.  

//React DOM paquete que facilica INTERACCION y actualizacion del dom (DOCUMENT OBJECT MODEL)
// REpresentacion en el navegador de ltodos los elemntos que confforman una pagina web

//ELEMENTOS
Con jsx , puedes crear y usar cualquier elemento de html div , img , a , header , nav , p , h1 , button , h2 

En jsx, los elementos html se representan con un color distinto al codigo. 
Los componentes definidos por el usuario comienzan con una letra mayuscula

//Atributos
Puedes agregar atributos a tus elementos jsx para escpecificar ciertas caracteristicas. Clases , estilos , pero algunos se escriben de forma distinta.

class en html , cambia a className en jsx (camelCase)

class es una palabra reservada en js que podemos usar para crear una clase . por eso se cambia.Clases

for se cambia a htmlFor en jsx

Es atributo style acepta un objeto js con propiedades css escritas en camelCase

por ejemplo en css background-image pero en jsx backgroundImage 

mismo con background-color y en jsx backgroundColor o font-family a fontFamily

//
const estiloDiv = {
    color: 'yellow',
    backgroundColor:'black'
};

//Ejmplo

<div stryle ={estiloDiv}>Hola, Mundo!</div>

//Estilo en linea

<div stryle={{color:'yellow'}}>Hola, mundo!</div> //pimeras llaves insertan js y las segundas crean objeto

//Estructura
AL igual que html los elementos pueden ser anidados en jsx para formar estructuras mas complejas

//Renderizar componentes 

<div id='root'></div>; //CONTENEDOR PRINCIPAL DE TODA LA APP

const elemento = <h1>Hola mundo!</h1>;

ReactDOM.render(
    elemento,
    document.getElementById('root')
);

import ReactDOM from "react-dom";

//SELF CLOSING TAGS

Elemento que solo posee una eqtiqueta de apertura ya que no contiene texto u otro elementos.

<img src = 'logo.png' alt='lala'/>

//JAVASCRIPT EN JSX

Dentro de {} se inserta el codigo de javascript

let adjetivo = 'INTERESANTE;'

<p> React es {adjetivo}</p> // dentro de las llaves insertamos la variable adjetivo e ingresa el valor asignado a la variable.

//Se puede escribir cualquier expresion valida de javascript entre las llaves y su valor sera reemplazado.

<p>El resultado es : {5 * 6}</p>

//OTRO EJEMPLO

let nombre = 'Gino';

<p>SU nombre es : {nombre.toUpperCase()}</p>
///////////////////////////////////////////////

