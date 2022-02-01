import React from 'react';
import {Routes, Route} from 'react-router-dom'
import TodoNavigator from "./components/TodoNavigator";
import TodoPage from "./components/TodoPage";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<TodoNavigator />} />
      <Route path={':todoId'} element={<TodoPage />} />
    </Routes>
  );
}

export default App;
