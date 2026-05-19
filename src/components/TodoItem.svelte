<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Todo } from '../lib/types';

  export let todo: Todo;
  const dispatch = createEventDispatcher();

  let editing = false;
  let editText = todo.text;

  function handleEdit() {
    if (editText.trim() && editText !== todo.text) {
      dispatch('edit', editText.trim());
    }
    editing = false;
  }
</script>

<div class="todo-item" class:completed={todo.completed}>
  <button
    class="check"
    class:done={todo.completed}
    on:click={() => dispatch('toggle')}
    aria-label={todo.completed ? '标记未完成' : '标记完成'}
  >
    {#if todo.completed}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    {/if}
  </button>

  <div class="content">
    {#if editing}
      <input
        class="edit-input"
        bind:value={editText}
        on:blur={handleEdit}
        on:keydown={(e) => e.key === 'Enter' && handleEdit()}
      />
    {:else}
      <span
        class="text"
        class:done={todo.completed}
        role="button"
        tabindex="0"
        aria-label="编辑待办"
        on:dblclick={() => { editing = true; editText = todo.text; }}
      >
        {todo.text}
      </span>
    {/if}
  </div>

  <button
    class="remove"
    on:click={() => dispatch('remove')}
    aria-label="删除"
  >
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</div>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: border-color 0.25s ease, background 0.25s ease, transform 0.2s ease, box-shadow 0.4s ease;
  }

  .todo-item:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-hover);
  }

  .todo-item.completed {
    opacity: 0.5;
  }

  .check {
    width: 22px;
    height: 22px;
    min-width: 22px;
    border: 2px solid var(--text-muted);
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
    padding: 0;
  }

  .check:hover {
    border-color: var(--accent);
    transform: scale(1.1);
  }

  .check.done {
    border-color: var(--accent);
    background: var(--accent);
    color: var(--accent-text);
  }

  .content {
    flex: 1;
    min-width: 0;
  }

  .text {
    display: block;
    font-size: 0.95rem;
    color: var(--text-primary);
    cursor: pointer;
    padding: 0.15rem 0;
    transition: color 0.3s ease;
    word-break: break-word;
  }

  .text.done {
    text-decoration: line-through;
    color: var(--text-muted);
  }

  .edit-input {
    width: 100%;
    padding: 0.25rem 0.5rem;
    background: var(--bg-input);
    border: 1px solid var(--border-focus);
    border-radius: 6px;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 0.95rem;
    outline: none;
  }

  .remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    color: var(--text-muted);
    border-radius: 8px;
    cursor: pointer;
    transition: color 0.2s ease, background 0.2s ease;
    padding: 0;
  }

  .remove:hover {
    color: var(--danger);
    background: var(--danger-bg);
  }
</style>
