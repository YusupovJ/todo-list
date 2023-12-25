import { gql } from "@apollo/client";

export const ALL_TODO = gql`
	query {
		todos: allTodos {
			id
			content
		}
	}
`;
