import React from 'react'
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";
import { Container, Flex } from "@chakra-ui/react";

export default function TodoNavigator(): JSX.Element {
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
  )
}