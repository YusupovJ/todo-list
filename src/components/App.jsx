import React, { useState } from "react";
import { useEffect } from "react";
import { Todo } from "../styles/components/App";

const App = (props) => {
	let storage = localStorage.getItem("todos");

	const [data, setData] = useState(JSON.parse(storage));
	const [input, setInput] = useState("");
	const [emptyInput, setEmptyInput] = useState(false);

	const generataId = (arr) => {
		let arrIdies = [];
		for (let i = 0; i < arr.length; i++) {
			const elem = arr[i];
			arrIdies.push(elem.id);
		}
		return arrIdies.length > 0 ? Math.max(...arrIdies) : 0;
	};

	const addTodo = (e) => {
		if (input === "") {
			setEmptyInput(true);
			return;
		}
		setInput("");
		setData([...data, { id: generataId(data) + 1, content: input }]);
	};

	const delTodo = (id) => {
		setData(data.filter((todo) => todo.id !== id));
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(data));
	}, [data]);

	return (
		<div className="wrapper">
			<Todo className="todo">
				<div className="todo__container">
					<div className="todo__body">
						<h1 className="todo__title">Todo list</h1>
						<input type="text" className={`todo__input ${emptyInput ? "err" : ""}`} onBlur={() => setEmptyInput(false)} value={input} onChange={(e) => setInput(e.target.value)} placeholder="add todo" />
						<button onClick={addTodo} className="todo__add">
							Add
						</button>
					</div>
					<span className="line"></span>
					<ul className="todo__list">
						{data.length > 0 ? (
							data.map((todo, index) => {
								return (
									<li key={index} className="todo__item">
										<p className="todo__name">{todo.content}</p>
										<button onClick={delTodo.bind(this, todo.id)} className="todo__del">
											Delete
										</button>
									</li>
								);
							})
						) : (
							<p className="todo__nothing">You don't have a todos</p>
						)}
					</ul>
				</div>
			</Todo>
		</div>
	);
};

export default App;
