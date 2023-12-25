const TodoInput = ({ emptyInput, input, setInput, addTodo, setEmptyInput }) => {
	const keyDownHandler = (e) => {
		if (e.code === "Enter") {
			addTodo();
		}
	};

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
				onKeyDown={keyDownHandler}
			/>
			<button onClick={addTodo} className="todo__add">
				Add
			</button>
		</div>
	);
};

export default TodoInput;
