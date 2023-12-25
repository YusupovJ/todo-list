import React, { useState } from "react";

const TodoInput = (props) => {
	const [input, setInput] = useState("");
	const [emptyInput, setEmptyInput] = useState(false);

	return (
		<div className="todo__body">
			<h1 className="todo__title">Todo list</h1>
			<input
				type="text"
				className={`todo__input ${emptyInput ? "err" : ""}`}
				onBlur={() => setEmptyInput(false)}
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Add todo"
			/>
			<button className="todo__add">Add</button>
		</div>
	);
};

export default TodoInput;
