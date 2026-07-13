<script lang="ts">
  import Icon from "@iconify/svelte";
  import type SkillSet from "$lib/types/SkillSet";

  export let content: SkillSet;
  export let size: string = "16";
</script>

<div class="skill-pill">
  <Icon icon={content.icon} width={size} height={size} />
  <span>{content.skillName}</span>
</div>
