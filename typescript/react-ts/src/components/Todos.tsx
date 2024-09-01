import { useContext } from "react";
import TodoCard from "./Todo";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosContext.todos.map((todo) => (
        <TodoCard key={todo.id} text={todo.text} id={todo.id}/>
      ))}
    </ul>
  );
};

export default Todos;
