import { writable } from "svelte/store";

export const toast = writable<{ type: string | undefined; message: string }>({
  type: undefined,
  message: "",
});
