import { useMemo, useState } from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  Link,
  Select,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { Collection, Priority } from "../enums";
import { Todo } from "../db/TodoClass";
import { useTodoContext, useUserContext } from "../App";

export default function TodoCreator(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [priority, setPriority] = useState<Priority>();
  const [collection, setCollection] = useState<Collection>();

  const { toggleColorMode } = useColorMode();
  const avatarWrapperColor = useColorModeValue("blue.50", "blackAlpha.400");
  const avatarBadgeColor = useColorModeValue("white", "black");

  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const todoCtx = useTodoContext();
  const userCtx = useUserContext();

  function handleTodoSubmit(): void {
    console.log(isFormValid);
    if (!isFormValid) {
      return;
    }
    const todo = new Todo(
      uuidv4(),
      name,
      author,
      priority ?? 0,
      collection ?? 0
    );
    todoCtx?.handleAddTodo(todo);
    resetForm();
  }

  function resetForm(): void {
    setName("");
    setAuthor("");
    setPriority(undefined);
    setCollection(undefined);
  }

  const isFormValid: boolean = useMemo(() => {
    if (name && author && priority !== undefined && collection !== undefined) {
      return true;
    }
    return false;
  }, [name, author, priority, collection]);

  return (
    <VStack justifyContent={"space-between"} w="full" h="full">
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <VStack spacing={3} alignItems={"flex-start"}>
          <Heading variant={"h1"}>Your fav todo app</Heading>
          <Text>
            by{" "}
            <Link href={"https://github.com/bercivarga"} target={"_blank"}>
              @bercivarga
            </Link>
          </Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel>Todo name</FormLabel>
              <Input
                placeholder={"Type your todo here"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isRequired>
              <FormLabel>Author</FormLabel>
              <Input
                placeholder={"Your name"}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isRequired>
              <FormLabel>Priority</FormLabel>
              <Select
                placeholder={"Select priority"}
                value={priority}
                onChange={(e) =>
                  setPriority(parseInt(e.target.value ?? undefined))
                }
              >
                <option value={Priority.low}>???? Low</option>
                <option value={Priority.medium}>???? Medium</option>
                <option value={Priority.high}>???? High</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isRequired>
              <FormLabel>Collection</FormLabel>
              <Select
                placeholder={"Select collection"}
                value={collection}
                onChange={(e) =>
                  setCollection(parseInt(e.target.value ?? undefined))
                }
              >
                <option value={Collection.personal}>???? Personal</option>
                <option value={Collection.work}>??????????? Work</option>
                <option value={Collection.other}>???? Other</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan} alignSelf={"end"}>
            <Button
              w={"full"}
              disabled={!isFormValid}
              onClick={handleTodoSubmit}
            >
              Add todo
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
      <Box px={10} w={"full"}>
        <HStack
          spacing={4}
          p={4}
          bg={avatarWrapperColor}
          w={"max-content"}
          borderRadius={6}
          boxShadow={"sm"}
        >
          <Avatar name={userCtx?.name} src={userCtx?.avatar}>
            <AvatarBadge boxSize="1.25em" bg="green.500" borderColor={avatarBadgeColor} />
          </Avatar>
          <VStack
            justifyContent={"center"}
            spacing={0.5}
            alignItems={"flex-start"}
          >
            <Text>{userCtx?.name ?? "User"}</Text>
            <Link fontWeight={"bold"} onClick={toggleColorMode}>Toggle mode</Link>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
}
