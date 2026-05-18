<script lang="ts">
  import './styles/global.css';
  import { wrap } from 'svelte-spa-router/wrap';
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import NotFound from './routes/NotFound.svelte';

  const routes = {
    '/': wrap({ component: Home }),
    '*': wrap({ component: NotFound })
  };
</script>

<Router {routes} />
