import React from 'react';
import { Container, Flex } from "@chakra-ui/react";
import TodoCreator from "./components/TodoCreator";
import TodoList from "./components/TodoList";

function App() {
  return (
      <Container maxW={'container.xl'} p={0}>
        <Flex
          h={{ base: 'auto', md: '100vh' }}
          py={[0, 10, 20]}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <TodoCreator />
          <TodoList />
        </Flex>
      </Container>
  );
}

export default App;
