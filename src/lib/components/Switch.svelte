<script lang="ts">
  import { onMount } from "svelte";
  let checked = false;

  onMount(() => {
    // Check localStorage or system preference on component mount
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    checked = isDarkMode;
    updateTheme(isDarkMode);
  });

  // Update theme based on checkbox state
  $: {
    if (typeof window !== "undefined") {
      updateTheme(checked);
    }
  }

  function updateTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
</script>

<div
  class="flex items-center space-x-2 absolute top-2 right-4 md:top-14 md:right-20 lg:right-28"
>
  <label for="check" class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" id="check" class="sr-only peer" bind:checked />
    <div
      class="w-11 h-6 bg-gray-500 dark:bg-gray-500 rounded-full peer-checked:bg-black dark:peer-checked:bg-white transition-colors duration-300"
    ></div>
    <span
      class="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-black rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"
    ></span>
  </label>
  <p class="text-black dark:text-white hidden md:block">
    {checked ? "Dark" : "Light"}
  </p>
</div>
