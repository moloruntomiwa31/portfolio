<script lang="ts">
  // your script goes here
  import Icon from "@iconify/svelte";
  import type SkillSet from "$lib/types/SkillSet";

  export let content: SkillSet;
  export let size: string = "18";
</script>

<div class="flex md:justify-start  flex-col">
  <Icon icon={content.icon} width={size} height={size} />
  <p class="text-center text-xs dark:text-[#888]">{content.skillName}</p>
</div>
