import { createContext, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import TodoNavigator from "./components/TodoNavigator";
import TodoPage from "./components/TodoPage";
import { ITodo } from "./db/TodoClass";
import db from "./db";

type TodoContextType =
  | {
      todos: ITodo[];
      handleAddTodo: (todo: ITodo) => void;
      handleDeleteTodo: (todo: ITodo) => void;
    }
  | undefined;

type UserContextType =
  | {
      name: string;
      avatar: string;
    }
  | undefined;

const TodoContext = createContext<TodoContextType>(undefined);
const UserContext = createContext<UserContextType>(undefined);

export function useTodoContext() {
  return useContext(TodoContext);
}

export function useUserContext() {
  return useContext(UserContext);
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>(db.todos);

  function handleAddTodo(todo: ITodo): void {
    setTodos([...todos, todo]);
  }

  function handleDeleteTodo(todo: ITodo): void {
    const filteredArr = todos.filter((t) => t.id !== todo.id);
    setTodos(filteredArr);
  }

  return (
    <UserContext.Provider
      value={{ name: db.user.name, avatar: db.user.avatar }}
    >
      <TodoContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo }}>
        <Routes>
          <Route path={"/"} element={<TodoNavigator />} />
          <Route path={":todoId"} element={<TodoPage />} />
        </Routes>
      </TodoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
