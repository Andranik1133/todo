import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/todoSlice";
import "../App.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todoLi">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
