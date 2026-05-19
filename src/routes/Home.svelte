<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import { useTodoStore } from '../stores/useTodoStore';
  import { theme } from '../stores/useThemeStore';

  const { todos } = useTodoStore;

  $: total = $todos.length;
  $: completed = $todos.filter(t => t.completed).length;

  function toggleTheme() {
    $theme = $theme === 'dark' ? 'light' : 'dark';
  }
</script>

<main>
  <button class="theme-toggle" on:click={toggleTheme} aria-label="切换主题">
    {#if $theme === 'dark'}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    {:else}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    {/if}
  </button>

  <div class="decor-line"></div>

  <header class="hero">
    <p class="eyebrow">Productivity</p>
    <h1>待办事项</h1>
    <p class="subtitle">优雅地管理你的每一天</p>
  </header>

  <div class="stats">
    <div class="stat">
      <span class="stat-value">{total}</span>
      <span class="stat-label">全部</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-value">{completed}</span>
      <span class="stat-label">已完成</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-value">{total - completed}</span>
      <span class="stat-label">待处理</span>
    </div>
  </div>

  <TodoList />
</main>

<style>
  main {
    max-width: 540px;
    margin: 0 auto;
    padding: 3rem 1.5rem 5rem;
    position: relative;
    animation: fadeUp 0.7s ease both;
  }

  .theme-toggle {
    position: absolute;
    top: 1rem;
    right: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 50%;
    background: var(--bg-card);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.25s ease;
    padding: 0;
  }

  .theme-toggle:hover {
    color: var(--accent);
    border-color: var(--border-hover);
    transform: rotate(30deg);
    box-shadow: var(--shadow);
  }

  .decor-line {
    width: 48px;
    height: 2px;
    background: var(--accent);
    margin: 0 auto 3rem;
    opacity: 0.6;
    transition: background 0.4s ease;
  }

  .hero {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .eyebrow {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.75rem;
    transition: color 0.4s ease;
  }

  h1 {
    font-family: var(--font-display);
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    transition: color 0.4s ease;
  }

  .subtitle {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 400;
  }

  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    padding: 1rem 1.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  }

  .stat {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1;
    transition: color 0.4s ease;
  }

  .stat-label {
    font-size: 0.7rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
  }

  .stat-divider {
    width: 1px;
    height: 28px;
    background: var(--border);
    transition: background 0.4s ease;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
