<script lang="ts">
  import { flip } from 'svelte/animate';
  import TodoItem from './TodoItem.svelte';
  import { useTodoStore } from '../stores/useTodoStore';

  let newTodo = '';
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoStore;

  function handleAdd() {
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      newTodo = '';
    }
  }

  $: items = $todos;
  $: isEmpty = items.length === 0;
</script>

<div class="todo-app">
  <div class="add-bar">
    <input
      type="text"
      placeholder="添加新任务..."
      bind:value={newTodo}
      on:keydown={(e) => e.key === 'Enter' && handleAdd()}
    />
    <button on:click={handleAdd}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <span>添加</span>
    </button>
  </div>

  {#if isEmpty}
    <div class="empty">
      <div class="empty-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </div>
      <p>暂无待办事项</p>
      <p class="empty-hint">添加你的第一个任务吧</p>
    </div>
  {:else}
    <ul>
      {#each items as todo, i (todo.id)}
        <li style="animation-delay: {i * 0.05}s" animate:flip={{ duration: 300 }}>
          <TodoItem
            {todo}
            on:remove={() => removeTodo(todo.id)}
            on:toggle={() => toggleTodo(todo.id)}
            on:edit={(e) => editTodo(todo.id, e.detail)}
          />
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .todo-app {
    width: 100%;
  }

  .add-bar {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  input[type='text'] {
    flex: 1;
    padding: 0.75rem 1rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  input[type='text']::placeholder {
    color: var(--text-muted);
  }

  input[type='text']:focus {
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px var(--accent-glow);
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1.25rem;
    border: none;
    background: var(--accent);
    color: var(--accent-text);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: var(--radius);
    cursor: pointer;
    transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  }

  button:hover {
    background: var(--accent-hover);
    box-shadow: 0 4px 20px var(--accent-glow);
    transform: translateY(-1px);
  }

  button:active {
    transform: translateY(0);
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  ul li {
    animation: slideIn 0.4s ease both;
    will-change: transform;
  }

  .empty {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-muted);
  }

  .empty-icon {
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  .empty p {
    font-size: 0.95rem;
  }

  .empty-hint {
    margin-top: 0.35rem;
    font-size: 0.8rem !important;
    opacity: 0.6;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
