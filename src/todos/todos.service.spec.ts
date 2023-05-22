import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add a new Todo item and retrieve it from the list', () => {
    // add a new todo item
    const addedTodo = service.create({
      title: 'My Todo Title',
      description: 'My todo description',
    });

    // test to check if the new item is added
    const foundTodo = service.findOne(addedTodo.id);
    expect(addedTodo.id).toBe(foundTodo.id);
    expect(addedTodo.title).toBe(foundTodo.title);
    expect(addedTodo.description).toBe(foundTodo.description);
    expect(addedTodo.completed).toBe(foundTodo.completed);
  });
});
