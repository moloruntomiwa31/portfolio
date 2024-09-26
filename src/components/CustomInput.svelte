<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  // your script goes here
  export let type;
  export let placeholder;

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    dispatch("input", target.value);
  };
</script>

<input
  {type}
  {placeholder}
  on:input={handleInput}
  class="bg-[#2d2d2d] outline-none rounded-tl-lg rounded-br-lg p-4 w-full transition focus:shadow-sm focus:shadow-[#888] placeholder:text-neutral-500 placeholder:font-light"
/>
