<script>
  // your script goes here
  import Badge from "../components/Badge.svelte";
  import Icon from "@iconify/svelte";
  export let content;
</script>

<div
  class="card flex flex-col gap-4 lg:flex-row items-start transition cursor-pointer p-4 rounded-md lg:hover:shadow-sm lg:hover:shadow-[#888] group"
>
  <div class="date mt-[-3px] w-1/2 lg:w-1/3">
    <img src={content.imagePath} alt={content.title} class="rounded shadow border-2 border-[#888]"/>
  </div>
  <div class="content space-y-4 lg:w-2/3">
    <div class="flex items-center gap-1">
      <h3 class="font-bold whitespace-nowrap text-sm">{content.title}</h3>
      <Icon
        icon="tabler:arrow-up-right"
        class="text-white transition-transform transform group-hover:translate-y-[-3px] group-hover:translate-x-[3px]"
        width="1.4rem"
        height="1.4rem"
      />
    </div>
    <p class="text-sm text-[#888] group-hover:text-white transition">
      {content.description}
    </p>
    <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-2 xl:grid-cols-3 gap-3">
      {#each content.skillSets as skill}
        <Badge content={skill} />
      {/each}
    </div>
  </div>
</div>
