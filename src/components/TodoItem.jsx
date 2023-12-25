import React from "react";

const TodoItem = ({ index, del, todo, delTodo }) => {
	return (
		<li key={index} className={`todo__item ${del.id === todo.id ? del.class : ""}`}>
			<p className="todo__name">{todo.content}</p>
			<button onClick={() => delTodo(todo.id)} className="todo__del">
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
