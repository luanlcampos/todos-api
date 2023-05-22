import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class TodosService {
  private readonly todos: Map<string, Todo> = new Map<string, Todo>();
  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      ...createTodoDto,
      id: uuid(),
      completed: false,
    };
    this.todos.set(newTodo.id, newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return [...this.todos.values()];
  }

  findOne(id: string) {
    return this.todos.get(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    this.todos.set(id, { ...updateTodoDto, id });
  }

  remove(id: string) {
    this.todos.delete(id);
  }

  removeAll() {
    this.todos.clear();
  }
}
