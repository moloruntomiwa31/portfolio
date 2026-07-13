<script>
  import { onDestroy } from "svelte";
  import { toast } from "$lib/stores/toast";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  let showToast = false;

  const unsub = toast.subscribe((tst) => {
    if (tst.type !== undefined) {
      showToast = true;
      setTimeout(() => toast.set({ type: undefined, message: '' }), 3500);
    } else {
      showToast = false;
    }
  });

  onDestroy(unsub);
</script>

{#if showToast}
  <div class="fixed top-5 right-5 z-[1000]" in:fly={{ y: -20, duration: 300 }} out:fly={{ y: -20, duration: 300 }}>
    <div
      class="flex items-center gap-3 py-3 px-4 rounded-xl shadow-2xl border text-sm font-medium"
      style="
        background: rgba(13,20,36,0.95);
        backdrop-filter: blur(20px);
        border-color: {$toast.type === 'success' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'};
        box-shadow: 0 0 30px {$toast.type === 'success' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)'};
      "
    >
      {#if $toast.type === "success"}
        <div class="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center shrink-0">
          <Icon icon="lets-icons:check-fill" class="text-green-400" width="14" height="14" />
        </div>
      {:else}
        <div class="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
          <Icon icon="mingcute:alert-fill" class="text-red-400" width="14" height="14" />
        </div>
      {/if}
      <span class="text-slate-200">{$toast.message}</span>
    </div>
  </div>
{/if}