import React from "react";

const TodoItem = ({ children }) => {
	return (
		<li className="todo__item">
			<p className="todo__name">{children}</p>
			<button className="todo__del">Delete</button>
		</li>
	);
};

export default TodoItem;
