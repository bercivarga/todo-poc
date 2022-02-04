import {
  Container,
  Flex,
  Heading,
  Spinner,
  VStack,
  Button,
  Tag,
  Box,
  HStack,
  PopoverFooter,
  PopoverBody,
  PopoverHeader,
  PopoverArrow,
  PopoverContent,
  Portal,
  PopoverTrigger,
  Popover,
  PopoverCloseButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { Collection, Priority } from "../enums";
import { useTodoContext } from "../App";

export default function TodoPage(): JSX.Element {
  const { todoId } = useParams<{ todoId: string }>();
  const navigate = useNavigate();
  const todoCtx = useTodoContext();

  const todo = todoCtx?.todos.find((todo) => todo.id === todoId);

  function deleteTodo() {
    if (!todo) return;
    todoCtx?.handleDeleteTodo(todo);
    navigate("/");
  }

  return (
    <Container maxW={"container.sm"} marginTop={8}>
      <Flex justifyContent={"space-between"}>
        <Button onClick={() => navigate("/")}>Go back</Button>
        <Popover>
          <PopoverTrigger>
            <Button colorScheme={"red"}>Delete</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to delete this todo?
            </PopoverBody>
            <PopoverFooter d="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Button variant="outline">Cancel</Button>
                <Button colorScheme="red" onClick={deleteTodo}>
                  Delete
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Flex>
      <Flex
        marginTop={8}
        bg={"whiteAlpha.100"}
        borderRadius={8}
        overflow={"hidden"}
        boxShadow={"lg"}
      >
        {!todo && <Spinner />}
        <VStack alignItems={"flex-start"} w={"full"}>
          <Box p={8} bg={"teal.600"} w={"full"} h={"full"}>
            <Heading as={"h2"} size={"lg"} color={"white"}>
              {todo?.name}
            </Heading>
          </Box>
          <VStack p={8} spacing={10} alignItems={"flex-start"} w={"full"}>
            <Heading as={"h3"} size={"md"}>
              Author: {todo?.author}
            </Heading>
            <HStack spacing={2} flexWrap={"wrap"}>
              <Tag size={"md"} variant={"solid"} colorScheme={"teal"}>
                Priority: {Priority[todo?.collection as number]}
              </Tag>
              <Tag size={"md"} variant={"solid"} colorScheme={"orange"}>
                In collection: {Collection[todo?.collection as number]}
              </Tag>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
}
