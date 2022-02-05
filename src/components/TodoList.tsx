import {
  Flex,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  VStack,
  useBreakpointValue,
  ScaleFade,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTodoContext } from "../App";

export default function TodoList(): JSX.Element {
  const borderRad = useBreakpointValue({ base: 0, md: 10 });
  const todoCtx = useTodoContext();

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={"teal.600"}
      borderRadius={borderRad}
      boxShadow={"lg"}
    >
      <Heading as={"h2"} color={"white"}>
        Your existing todos
      </Heading>
      <UnorderedList
        styleType={"none"}
        w={"full"}
        display={"flex"}
        flexDir={"column"}
        spacing={2}
        overflowY={"scroll"}
        maxH={"full"}
        css={{
          '&::-webkit-scrollbar': {
            width: 0,
            display: "hidden"
          },
          '&::-webkit-scrollbar-track': {
            width: 0,
            display: "hidden"
          },
          '&::-webkit-scrollbar-thumb': {
            width: 0,
            display: "hidden"
          },
        }}
      >
        {todoCtx?.todos.map((todo) => (
          <ScaleFade key={todo.id} initialScale={1} in={!!todoCtx.todos.find(t => t.id === todo.id)}>
            <Link to={`/${todo.id}`}>
              <ListItem>
                <Flex
                  direction={"row"}
                  justifyContent={"space-between"}
                  p={"8px 16px"}
                  bg={"white"}
                  borderRadius={4}
                  color={"blackAlpha.900"}
                >
                  <Text fontSize="lg" fontWeight={"bold"}>
                    {todo.name}
                  </Text>
                  <Text fontSize="lg">~ {todo.author}</Text>
                </Flex>
              </ListItem>
            </Link>
          </ScaleFade>
        ))}
      </UnorderedList>
    </VStack>
  );
}
