import { writable } from 'svelte/store';
import type { Todo } from '../lib/types';

function createTodoStore() {
  const stored = localStorage.getItem('todos');
  const initial: Todo[] = stored ? JSON.parse(stored) : [];
  const { subscribe, set, update } = writable<Todo[]>(initial);

  function persist(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return {
    subscribe,
    todos: { subscribe },
    addTodo(text: string) {
      update(todos => {
        const newTodos = [...todos, { id: Date.now(), text, completed: false }];
        persist(newTodos);
        return newTodos;
      });
    },
    removeTodo(id: number) {
      update(todos => {
        const newTodos = todos.filter(t => t.id !== id);
        persist(newTodos);
        return newTodos;
      });
    },
    toggleTodo(id: number) {
      update(todos => {
        const newTodos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
        persist(newTodos);
        return newTodos;
      });
    },
    editTodo(id: number, text: string) {
      update(todos => {
        const newTodos = todos.map(t => t.id === id ? { ...t, text } : t);
        persist(newTodos);
        return newTodos;
      });
    },
    set,
    update
  };
}

export const useTodoStore = createTodoStore;
