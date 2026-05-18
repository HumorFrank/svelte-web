import { describe, it, expect, beforeEach } from 'vitest';
import { useTodoStore } from '../src/stores/useTodoStore';

describe('useTodoStore', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a todo', () => {
    const store = useTodoStore();
    store.addTodo('Test');
    store.todos.subscribe(todos => {
      expect(todos.length).toBe(1);
      expect(todos[0].text).toBe('Test');
    })();
  });

  it('should remove a todo', () => {
    const store = useTodoStore();
    store.addTodo('Test');
    let id = 0;
    store.todos.subscribe(todos => { id = todos[0]?.id; })();
    store.removeTodo(id);
    store.todos.subscribe(todos => {
      expect(todos.length).toBe(0);
    })();
  });

  it('should toggle a todo', () => {
    const store = useTodoStore();
    store.addTodo('Test');
    let id = 0;
    store.todos.subscribe(todos => { id = todos[0]?.id; })();
    store.toggleTodo(id);
    store.todos.subscribe(todos => {
      expect(todos[0].completed).toBe(true);
    })();
  });

  it('should edit a todo', () => {
    const store = useTodoStore();
    store.addTodo('Test');
    let id = 0;
    store.todos.subscribe(todos => { id = todos[0]?.id; })();
    store.editTodo(id, 'Updated');
    store.todos.subscribe(todos => {
      expect(todos[0].text).toBe('Updated');
    })();
  });
});
