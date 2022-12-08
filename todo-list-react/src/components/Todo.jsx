import React from "react";
import "../stylesheets/Todo.css";
const Todo = ({ texto }) => {
  return (
    <div className="tarea-contenedor">
      <div className="tare-texto">{texto}</div>
      <div className="tarea-icono">Eliminar</div>
    </div>
  );
};

export default Todo;
