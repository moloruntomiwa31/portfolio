<script>
  import Badge from "../components/Badge.svelte";
  import Icon from "@iconify/svelte";
  export let content;
</script>

<div class="glass-card p-6 cursor-pointer group relative overflow-hidden">
  <!-- Hover glow line -->
  <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <div class="flex flex-col sm:flex-row items-start gap-5">
    <!-- Image -->
    <div class="w-full sm:w-[120px] shrink-0 overflow-hidden rounded-lg">
      <img
        src={content.imagePath}
        alt={content.title}
        class="w-full aspect-video object-cover rounded-lg border border-white/5 group-hover:border-indigo-500/30 transition-all duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <!-- Content -->
    <div class="space-y-3 flex-1 min-w-0">
      <div class="flex items-center gap-2">
        <h3 class="font-semibold text-[0.83rem] text-slate-200 group-hover:text-white transition-colors duration-300">{content.title}</h3>
        <Icon
          icon="tabler:arrow-up-right"
          class="text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] shrink-0"
          width="1.1rem"
          height="1.1rem"
        />
      </div>
      <p class="text-[0.8rem] leading-[1.7] text-slate-500 group-hover:text-slate-400 transition-colors duration-300 line-clamp-3">
        {content.description}
      </p>
      <div class="flex flex-wrap gap-2">
        {#each content.skillSets as skill}
          <Badge content={skill} size="14" />
        {/each}
      </div>
    </div>
  </div>
</div>
