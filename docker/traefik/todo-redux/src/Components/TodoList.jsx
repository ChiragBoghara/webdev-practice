import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.tasks);
  const notification = useSelector((state) => state.ui.notification);

  return (
    <div className="todolist">
      {!notification && todos.length === 0 ? (
        <h4>No Tasks found.</h4>
      ) : (
        todos.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })
      )}
    </div>
  );
}
