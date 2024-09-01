import { useContext } from "react";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

// type TodoProps = {
//   text: string;
//   id: string;
// };

interface TodoProps {
  text: string;
  id: string;
};

const TodoCard = ({ text, id }: TodoProps) => {
  const todosCtx = useContext(TodosContext);
  return (
    <li
      className={classes.item}
      onClick={() => {
        todosCtx.deleteTodo(id);
      }}
    >
      {text}
    </li>
  );
};

export default TodoCard;
