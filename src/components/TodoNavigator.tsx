import TodoCreator from "./TodoCreator";
import { Container, Flex } from "@chakra-ui/react";
import TodoList from "./TodoList";

export default function TodoNavigator(): JSX.Element {
  return (
    <Container maxW={'container.xl'} p={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 0, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <TodoCreator />
        <TodoList />
      </Flex>
    </Container>
  )
}