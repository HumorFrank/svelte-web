<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
</script>

<main>
  <h1>待办事项管理器</h1>
  <TodoList />
</main>

<style scoped>
main {
  max-width: 480px;
  margin: 2rem auto;
  padding: 1rem;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
