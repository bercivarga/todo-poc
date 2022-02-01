import React from 'react'
import { Container, Flex, Heading, Spinner, VStack, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { Collection, Priority } from "../enums";
import { useTodoContext } from "../App";

export default function TodoPage(): JSX.Element {
  const { todoId } = useParams<{todoId: string}>()
  const navigate = useNavigate()
  const todoCtx = useTodoContext()

  const todo = todoCtx?.todos.find(todo => todo.id === todoId)

  return (
      <Container maxW={'container.sm'} marginTop={4} bg={'green.100'} borderRadius={8}>
        <Flex p={8}>
          {!todo && <Spinner />}
          <VStack spacing={10} alignItems={'flex-start'}>
            <Button onClick={() => navigate('/')}>Go back</Button>
            <Heading as={'h2'} size={'xl'}>{todo?.name}</Heading>
            <Heading as={'h3'} size={'md'}>Author: {todo?.author}</Heading>
            <Text>In collection: {Collection[todo?.collection as number]}</Text>
            <Text>Priority: {Priority[todo?.collection as number]}</Text>
          </VStack>
        </Flex>
      </Container>
  )
}