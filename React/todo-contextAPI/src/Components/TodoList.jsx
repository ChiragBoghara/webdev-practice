import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import { TasksContext } from "../context";

export default function TodoList() {
  const tasks = useContext(TasksContext);

  return (
    <div className="todolist">
      {tasks.length === 0 ? (
        <h4>No Tasks found.</h4>
      ) : (
        tasks.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })
      )}
    </div>
  );
}
