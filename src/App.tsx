import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Container } from "@chakra-ui/react";
import TodoNavigator from "./components/TodoNavigator";

function App() {
  return (
      <Container maxW={'container.xl'} p={0}>
        <Routes>
          <Route path={'/'} element={<TodoNavigator />} />
          <Route path={':todoId'} element={<div>todoid</div>} />
        </Routes>
      </Container>
  );
}

export default App;
