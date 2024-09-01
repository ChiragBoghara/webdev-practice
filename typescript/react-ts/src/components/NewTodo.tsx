import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    textInputRef.current!.value = "";
  };
  return (
    <form className={classes.form} action="" onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={textInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
