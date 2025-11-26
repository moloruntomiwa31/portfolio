<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  import Icon from '@iconify/svelte';
</script>

<button
  on:click={toggleTheme}
  class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
  aria-label="Toggle theme"
>
  {#if $theme === 'light'}
    <Icon icon="ph:moon-fill" width="24" height="24" />
  {:else}
    <Icon icon="ph:sun-fill" width="24" height="24" class="text-yellow-400" />
  {/if}
</button>
