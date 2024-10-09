<script>
    import { onDestroy } from "svelte";
    import { toast } from "$lib/stores/toast";
    import { fly } from "svelte/transition";
    import Icon from "@iconify/svelte";
  
    let showToast = false;
  
    const unsub = toast.subscribe((tst) => {
      if (tst.type !== undefined) {
        showToast = true;
        setTimeout(() => toast.set({ type: undefined, message: '' }), 3000);
      } else {
        showToast = false;
      }
    });
  
    onDestroy(unsub);
  </script>
  
  {#if showToast}
  <div class="fixed top-4 right-5 z-[1000]">
    <div class="w-fit">
      <div
        class="flex items-center min-w-full border-l-4 py-3 px-4 shadow-lg rounded-md mb-4 transition-transform transform-gpu duration-300 ease-in-out"
        class:bg-green-500={$toast.type === "success"}
        class:border-green-700={$toast.type === "success"}
        class:bg-red-500={$toast.type === "error"}
        class:border-red-700={$toast.type === "error"}
        in:fly={{ x: 100, duration: 300 }}
        out:fly={{ x: 100, duration: 300 }}
      >
        {#if $toast.type === "success"}
          <Icon
            icon="lets-icons:check-fill"
            class="text-white mr-3"
            width="1.5rem"
            height="1.5rem"
          />
        {/if}
        {#if $toast.type === "error"}
          <Icon
            icon="mingcute:alert-fill"
            class="text-white mr-3"
            width="1.5rem"
            height="1.5rem"
          />
        {/if}
        <div class="text-white max-w-xs">{$toast.message}</div>
      </div>
    </div>
  </div>
  {/if}