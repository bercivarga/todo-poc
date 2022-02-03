import { Container, Flex, Heading, Spinner, VStack, Text, Button, Divider } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { Collection, Priority } from "../enums";
import { useTodoContext } from "../App";

export default function TodoPage(): JSX.Element {
  const { todoId } = useParams<{todoId: string}>()
  const navigate = useNavigate()
  const todoCtx = useTodoContext()

  const todo = todoCtx?.todos.find(todo => todo.id === todoId)

  return (
      <Container maxW={'container.sm'} marginTop={8}>
        <Button onClick={() => navigate('/')}>Go back</Button>
        <Flex p={8} marginTop={8} bg={'whiteAlpha.100'} borderRadius={8} boxShadow={'lg'}>
          {!todo && <Spinner />}
          <VStack spacing={10} alignItems={'flex-start'} w={"full"}>
            <Heading as={'h2'} size={'xl'}>{todo?.name}</Heading>
            <Divider borderColor={'blackAlpha.900'} />
            <Heading as={'h3'} size={'md'}>Author: {todo?.author}</Heading>
            <Text>In collection: {Collection[todo?.collection as number]}</Text>
            <Text>Priority: {Priority[todo?.collection as number]}</Text>
          </VStack>
        </Flex>
      </Container>
  )
}