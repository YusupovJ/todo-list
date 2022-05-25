import styled from "styled-components";

export const Todo = styled.section`
	.todo__body {
		display: flex;
		flex-wrap: wrap;
		padding: 30px 0px 0px 0px;
	}
	.todo__title {
		font-size: 50px;
		font-weight: 700;
		flex: 1 0 100%;
		margin: 0px 0px 10px 0px;
	}
	.todo__input {
		display: inline-block;
		flex: 8 1;
		box-shadow: 0px 3px 5px #bababa;
		font-size: 20px;
		font-family: cursive;
		padding: 10px 15px;
		border-bottom-left-radius: 10px;
		border-top-left-radius: 10px;
		border: 1px solid transparent;
		&:focus {
			box-shadow: 0px 1px 5px #1250d5;
			border: 1px solid #1250d5;
		}
		&.err {
			border: 1px solid red;
			&:focus {
				box-shadow: 0px 1px 5px red;
			}
		}
	}
	.todo__add {
		color: #fff;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 10px;
		font-size: 20px;
		background-color: #1250d5;
		transition: all 0.4s ease 0s;
		flex: 2 1;
		display: inline-block;
		&:hover {
			background-color: #103c9c;
		}
	}
	.line {
		margin: 20px 0px;
		width: 100%;
		display: inline-block;
		height: 1px;
		background-color: #ccc;
	}
	.todo__list {
		padding: 20px;
		min-height: 600px;
		border-radius: 10px;
		background-color: #e0cfcf;
	}
	.todo__item {
		margin: 0px 0px 10px 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
		border-radius: 5px;
		background-color: #ede2e2;
		box-shadow: 0px 3px 5px #bababa;
	}
	.todo__del {
		background-color: #fff;
		display: inline-block;
		padding: 10px;
		color: red;
		font-weight: 700;
		border-radius: 4px;
		transition: all 0.4s ease 0s;
		&:hover {
			background-color: #cdcaca;
		}
	}
	.todo__name {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: 500;
		font-size: 18px;
	}
	.todo__nothing {
		font-weight: 700;
		display: flex;
		justify-content: center;
	}
`;
