<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();

  export let type: string = "text";
  export let placeholder: string;
  export let name: string;
  export let value: string;

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    dispatch("input", target.value);
  };

  let inputElement: HTMLInputElement;

  onMount(() => {
    if (inputElement) {
      inputElement.type = type;
    }
  });
</script>

<input
  bind:value
  {placeholder}
  {name}
  on:input={handleInput}
  class="bg-black dark:bg-[#2d2d2d] text-white outline-none rounded-tl-lg rounded-br-lg p-4 w-full transition focus:shadow-sm focus:shadow-[#888] placeholder:text-neutral-50 dark:placeholder:text-neutral-500:font-light"
  bind:this={inputElement}
/>
