import { v4 as uuidv4 } from 'uuid';
import {Todo} from './TodoClass'
import { Collection, Priority } from "../enums";

const db = {
  user: {
    name: 'Berci Varga',
    avatar: 'https://avatars.githubusercontent.com/u/65171545?v=4',
  },
  todos: [
    new Todo(uuidv4(), 'Feed cat', 'Berci', Priority.high, Collection.personal),
    new Todo(uuidv4(), 'Get groceries', 'Fanni', Priority.high, Collection.personal),
    new Todo(uuidv4(), 'Buy birthday presents', 'Berci', Priority.high, Collection.personal),
    new Todo(uuidv4(), 'Meow', 'Feri', Priority.high, Collection.personal)
  ]
}

export default db