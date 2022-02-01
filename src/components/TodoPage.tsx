import React, { useEffect, useState } from 'react'
import { Container, Flex, Heading, Spinner, VStack, Text, Button } from "@chakra-ui/react";
import db from '../db'
import { useParams, useNavigate } from "react-router-dom";
import { ITodo } from "../db/TodoClass";
import { Collection, Priority } from "../enums";

export default function TodoPage(): JSX.Element {
  const [todo, setTodo] = useState<ITodo>();

  const { todoId } = useParams<{todoId: string}>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!todoId) return
    const todo = db.todos.find(todo => todo.id === todoId)
    setTodo(todo)
  }, [todoId])

  return (
      <Container maxW={'container.sm'} marginTop={4} bg={'green.100'} borderRadius={8}>
        <Flex p={8}>
          {!todo && <Spinner />}
          <VStack spacing={10} alignItems={'flex-start'}>
            <Button onClick={() => navigate('/')}>Go back</Button>
            <Heading as={'h2'} size={'xl'}>{todo?.name}</Heading>
            <Heading as={'h3'} size={'md'}>{todo?.author}</Heading>
            <Text>In collection: {Collection[todo?.collection as number]}</Text>
            <Text>Priority: {Priority[todo?.collection as number]}</Text>
          </VStack>
        </Flex>
      </Container>
  )
}