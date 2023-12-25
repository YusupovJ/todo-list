import TodoItem from "./TodoItem";
import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_TODO } from "../apollo/todos.js";

const TodoList = (props) => {
	const { loading, error, data } = useQuery(ALL_TODO);

	if (loading) return "loading...";
	if (error) return `Error! ${error}`;

	return (
		<ul className="todo__list">
			{data.todos.map((todo) => {
				return <TodoItem key={todo.id}>{todo.content}</TodoItem>;
			})}
		</ul>
	);
};

export default TodoList;
