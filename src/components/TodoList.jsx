import TodoItem from "./TodoItem";
import React from "react";

const TodoList = ({ data, delTodo, del }) => {
	return (
		<ul className="todo__list">
			{data?.length > 0 ? (
				data?.map((todo, index) => {
					return (
						<TodoItem
							key={todo.id}
							index={index}
							delTodo={delTodo}
							todo={todo}
							del={del}
						/>
					);
				})
			) : (
				<p className="todo__nothing">You don't have any todos</p>
			)}
		</ul>
	);
};

export default TodoList;
