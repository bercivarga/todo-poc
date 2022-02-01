import React from 'react'
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";
import { Flex } from "@chakra-ui/react";

export default function TodoNavigator(): JSX.Element {
  return (
    <Flex
      h={{ base: 'auto', md: '100vh' }}
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <TodoCreator />
      <TodoList />
    </Flex>
  )
}