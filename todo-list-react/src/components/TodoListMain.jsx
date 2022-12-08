import React from "react";
import "../stylesheets/TodoListMain.css";
import Todo from "../components/Todo";
const todoListMain = () => {
  return (
    <div className="tareas-lista-principal">
      <h1>Mis Tareas</h1>
      <Todo />
    </div>
  );
};

export default todoListMain;
