import React from "react";
import { TodoList } from "../components/toDoList";
import "./../../styles/App.css"

export const App = () => {

	return (
		<div className="app-task">
      <div className="task-list-principal">
        <TodoList/>
      </div>
		</div>
	);
};

