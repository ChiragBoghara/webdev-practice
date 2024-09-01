import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TodoContextObj>({
  todos: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

interface TodosContextProviderProps {
  children: React.ReactNode;
}

// export const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {};

export const TodosContextProvider = ({
  children,
}: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };
  const deleteTodoHandler = (id: string) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const contextvalue: TodoContextObj = {
    todos: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextvalue}>
      {children}
    </TodosContext.Provider>
  );
};
