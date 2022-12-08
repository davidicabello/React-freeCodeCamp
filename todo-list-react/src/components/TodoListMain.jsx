import React from "react";
import "../stylesheets/TodoListMain.css";
import ListaDeTareas from "./TodoList";

const todoListMain = () => {
  return (
    <div className="tareas-lista-principal">
      <h1>Mis Tareas</h1>
      <ListaDeTareas />
    </div>
  );
};

export default todoListMain;
