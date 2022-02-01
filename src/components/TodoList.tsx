import React from 'react'
import { Flex, Heading, Text, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import db from '../db'
import { Link } from "react-router-dom"; // TODO remove after redux is added

export default function TodoList(): JSX.Element {
  return (
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={'green.100'} borderRadius={10}>
        <Heading as={'h2'}>Your existing todos</Heading>
        <UnorderedList styleType={'none'} w={'full'}>
          {db.todos.map(todo => (
              <Link to={`/${todo.id}`} key={todo.id}>
                <ListItem>
                  <Flex direction={'row'} justifyContent={'space-between'} p={'8px 16px'} bg={'white'} borderRadius={4}>
                    <Text fontSize='lg' fontWeight={'bold'}>{todo.name}</Text>
                    <Text fontSize='lg'>~ {todo.author}</Text>
                  </Flex>
                </ListItem>
              </Link>
          ))}
        </UnorderedList>
      </VStack>
  )
}