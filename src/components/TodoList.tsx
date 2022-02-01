import React from 'react'
import { Heading, VStack } from "@chakra-ui/react";

export default function TodoList(): JSX.Element {
  return (
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <Heading>Your existing todos</Heading>
      </VStack>
  )
}