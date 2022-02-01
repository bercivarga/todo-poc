import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Link,
  Select,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { Collection, Priority } from "../enums";
import { Todo } from "../db/TodoClass";
import { useTodoContext } from "../App";

export default function TodoCreator(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [priority, setPriority] = useState<Priority>(Priority.medium);
  const [collection, setCollection] = useState<Collection>(Collection.personal);

  const colSpan = useBreakpointValue({base: 2, md: 1})
  const todoCtx = useTodoContext()

  function handleTodoSubmit(): void {
    const todo = new Todo(uuidv4(), name, author, priority, collection)
    todoCtx?.handleAddTodo(todo)
  }

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems={'flex-start'}>
        <Heading variant={'h1'}>Your fav todo app</Heading>
        <Text>by <Link href={'https://github.com/bercivarga'} target={'_blank'}>@bercivarga</Link></Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6}>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Todo name</FormLabel>
            <Input placeholder={'Type your todo here'} value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input placeholder={'Your name'} value={author} onChange={(e) => setAuthor(e.target.value)} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Priority</FormLabel>
            <Select placeholder={'Select priority'} value={priority} onChange={(e) => setPriority(parseInt(e.target.value))}>
              <option value={Priority.low}>🟢 Low</option>
              <option value={Priority.medium}>🟠 Medium</option>
              <option value={Priority.high}>🔴 High</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Collection</FormLabel>
            <Select placeholder={'Select collection'} value={collection} onChange={(e) => setCollection(parseInt(e.target.value))}>
              <option value={Collection.personal}>🙆 Personal</option>
              <option value={Collection.work}>🧑‍💻 Work</option>
              <option value={Collection.other}>🦧 Other</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan} alignSelf={'end'}>
          <Button w={'full'} onClick={handleTodoSubmit}>Add todo</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}