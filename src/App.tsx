import React, { createContext, useContext, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import TodoNavigator from "./components/TodoNavigator";
import TodoPage from "./components/TodoPage";
import { ITodo } from "./db/TodoClass";
import db from "./db";

const TodoContext = createContext<{todos:ITodo[], handleAddTodo: (todo: ITodo) => void } | undefined>(undefined)

export function useTodoContext() {
  return useContext(TodoContext)
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>(db.todos)

  function handleAddTodo(todo: ITodo): void {
    setTodos([...todos, todo])
  }

  return (
      <TodoContext.Provider value={{todos, handleAddTodo}}>
        <Routes>
          <Route path={'/'} element={<TodoNavigator />} />
          <Route path={':todoId'} element={<TodoPage />} />
        </Routes>
      </TodoContext.Provider>
  );
}

export default App;
