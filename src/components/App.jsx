import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("");
	const [emptyInput, setEmptyInput] = useState(false);
	const [del, setDel] = useState({ class: "", id: null });

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

	return (
		<div className="wrapper">
			<section className="todo">
				<div className="todo__container">
					<AddTodo
						emptyInput={emptyInput}
						input={input}
						setInput={setInput}
						addTodo={addTodo}
						setEmptyInput={setEmptyInput}
					/>
					<span className="line"></span>
					<TodoList del={del} delTodo={delTodo} data={data} />
				</div>
			</section>
		</div>
	);
};

export default App;
