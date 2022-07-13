import React, { useState } from "react";
import { useEffect } from "react";
import { Todo } from "../styles/components/App";

const App = (props) => {
	let storage = localStorage.getItem("todos");

	const [data, setData] = useState(JSON.parse(storage) || []);
	const [input, setInput] = useState("");
	const [emptyInput, setEmptyInput] = useState(false);
	const [del, setDel] = useState({ class: "", id: null });

	useEffect(() => {
		localStorage.setItem("todos", "[]");
	}, [data]);

	const addTodo = (e) => {
		if (input === "") {
			setEmptyInput(true);
			return;
		}

		setInput("");
		setData([...data, { id: Date.now(), content: input }]);
	};

	const delTodo = (id) => {
		setDel({ class: "del", id });
		setTimeout(() => {
			setData(data.filter((todo) => todo.id !== id));
		}, 200);
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
						<input
							type="text"
							className={`todo__input ${emptyInput ? "err" : ""}`}
							onBlur={() => setEmptyInput(false)}
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Add todo"
							onKeyDown={(e) => {
								if (e.code === "Enter") {
									addTodo();
								}
							}}
						/>
						<button onClick={addTodo} className="todo__add">
							Add
						</button>
					</div>
					<span className="line"></span>
					<ul className="todo__list">
						{data?.length > 0 ? (
							data?.map((todo, index) => {
								return (
									<li key={index} className={`todo__item ${del.id === todo.id ? del.class : ""}`}>
										<p className="todo__name">{todo.content}</p>
										<button onClick={() => delTodo(todo.id)} className="todo__del">
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
