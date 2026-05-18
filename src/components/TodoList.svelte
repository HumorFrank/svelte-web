<script lang="ts">
  import { onMount } from 'svelte';
  import TodoItem from './TodoItem.svelte';
  import { useTodoStore } from '../stores/useTodoStore';
  import type { Todo } from '../lib/types';

  let newTodo = '';
  const { subscribe, addTodo, removeTodo, toggleTodo, editTodo, todos } = useTodoStore();

  function handleAdd() {
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      newTodo = '';
    }
  }
</script>

<div class="todo-app">
  <div class="add-bar">
    <input
      type="text"
      placeholder="添加新任务..."
      bind:value={newTodo}
      on:keydown={(e) => e.key === 'Enter' && handleAdd()}
    />
    <button on:click={handleAdd}>添加</button>
  </div>
  <ul>
    {#each $todos as todo (todo.id)}
      <TodoItem {todo} on:remove={() => removeTodo(todo.id)} on:toggle={() => toggleTodo(todo.id)} on:edit={(e) => editTodo(todo.id, e.detail)} />
    {/each}
  </ul>
</div>

<style scoped>
.todo-app {
  width: 100%;
}
.add-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  background: #0070f3;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
