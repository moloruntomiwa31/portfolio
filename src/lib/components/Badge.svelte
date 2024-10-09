<script lang="ts">
  // your script goes here
  export let content: string = "Badge";
</script>

<div
  class="flex items-center justify-center rounded-3xl text-sm font-medium badge min-w-fit p-2 text-white bg-black hover:bg-[#2d2d2d] dark:bg-[#2d2d2d] dark:text-[#888] dark:hover:bg-white dark:hover:text-black transition"
>
  {content}
</div>
