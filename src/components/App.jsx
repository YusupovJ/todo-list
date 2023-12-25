import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoCount from "./TodoCount";

const App = () => {
	return (
		<div className="wrapper">
			<section className="todo">
				<div className="todo__container">
					<AddTodo />
					<span className="line"></span>
					<TodoList />
					<TodoCount />
				</div>
			</section>
		</div>
	);
};

export default App;
