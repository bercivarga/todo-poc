import React from 'react'
import {
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Input,
  Select,
  Button,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

enum Priority {
  low,
  medium,
  high
}

enum Collection {
  personal,
  work,
  other
}

export default function TodoCreator(): JSX.Element {
  const colSpan = useBreakpointValue({base: 2, md: 1})

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems={'flex-start'}>
        <Heading variant={'h1'}>Your fav todo app</Heading>
        <Text>by @bercivarga</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6}>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Todo name</FormLabel>
            <Input placeholder={'Type your todo here'} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input placeholder={'Your name'} defaultValue={'Berci'} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Priority</FormLabel>
            <Select placeholder={'Select priority'} >
              <option value={Priority.low}>🟢 Low</option>
              <option value={Priority.medium}>🟠 Medium</option>
              <option value={Priority.high}>🔴 High</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Collection</FormLabel>
            <Select placeholder={'Select collection'} >
              <option value={Collection.personal}>Personal</option>
              <option value={Collection.work}>Work</option>
              <option value={Collection.other}>Other</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan} alignSelf={'end'}>
          <Button w={'full'}>Add todo</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}