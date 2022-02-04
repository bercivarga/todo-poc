import {
  Flex,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  VStack,
  useBreakpointValue,
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
      >
        {todoCtx?.todos.map((todo) => (
          <Link to={`/${todo.id}`} key={todo.id}>
            <ListItem>
              <Flex
                direction={"row"}
                justifyContent={"space-between"}
                p={"8px 16px"}
                bg={"white"}
                borderRadius={4}
              >
                <Text fontSize="lg" fontWeight={"bold"}>
                  {todo.name}
                </Text>
                <Text fontSize="lg">~ {todo.author}</Text>
              </Flex>
            </ListItem>
          </Link>
        ))}
      </UnorderedList>
    </VStack>
  );
}
