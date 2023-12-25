import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_TODO } from "../apollo/todos.js";

const TodoCount = () => {
	const { data } = useQuery(ALL_TODO);

	const count = data?.todos ? data.todos.length : 0;

	return <div className="todo__count">Total todos: {count}</div>;
};

export default TodoCount;
