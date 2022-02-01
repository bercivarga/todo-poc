import { Collection, Priority } from "../enums";

export interface ITodo {
  id: string;
  name: string;
  author: string;
  priority: Priority;
  collection: Collection;
}

export class Todo implements ITodo {
  id;
  name;
  author;
  priority;
  collection;

  constructor(id: string, name: string, author: string, priority: Priority, collection: Collection) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.priority = priority;
    this.collection = collection;
  }
}