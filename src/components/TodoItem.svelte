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

<li class="todo-item">
  <input type="checkbox" checked={todo.completed} on:change={() => dispatch('toggle')} />
  {#if editing}
    <input class="edit" bind:value={editText} on:blur={handleEdit} on:keydown={(e) => e.key === 'Enter' && handleEdit()} />
  {:else}
    <span class:completed={todo.completed} role="button" tabindex="0" aria-label="编辑待办" on:dblclick={() => { editing = true; editText = todo.text; }}>{todo.text}</span>
  {/if}
  <button class="remove" on:click={() => dispatch('remove')}>删除</button>
</li>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
.completed {
  text-decoration: line-through;
  color: #aaa;
}
.edit {
  flex: 1;
  padding: 0.25rem;
}
.remove {
  margin-left: auto;
  background: none;
  border: none;
  color: #e00;
  cursor: pointer;
}
</style>
