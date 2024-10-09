<script lang="ts">
  import "../app.css";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import Toast from "$lib/components/Toast.svelte";

  const icons = [
    {
      iconName: "ri:github-fill",
      path: "https://github.com/moloruntomiwa31",
    },
    {
      iconName: "ri:linkedin-fill",
      path: "https://www.linkedin.com/in/aderibigbe-michael-2b2a7823a/",
    },
    {
      iconName: "ri:twitter-x-fill",
      path: "https://x.com/_tomthegrapher",
    },
    {
      iconName: "akar-icons:tiktok-fill",
      path: "https://www.tiktok.com/@moloruntomiwa31",
    },
  ];

  const pageLinks = [
    {
      name: "About",
      tag: "#about",
    },
    {
      name: "Experience",
      tag: "#experience",
    },
    {
      name: "Project",
      tag: "#project",
    },
    {
      name: "Contact",
      tag: "#contact",
    },
  ];

  let activeSection = "";
  let observer: any;

  const initializeObserver = () => {
    if (observer) {
      observer.disconnect();
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
  };

  onMount(() => {
    initializeObserver();

    const handleResize = () => {
      initializeObserver();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<Toast />
<main
  class="flex flex-col lg:flex-row items-center gap-16 xl:gap-4 justify-between w-full h-screen md:px-8 md:py-8 xl:px-20 xl:py-20"
>
  <div
    class="dark:text-white h-full space-y-6 px-4 lg:w-2/5 xl:space-y-14 pt-6"
  >
    <div class="space-y-1">
      <h1 class="font-extrabold text-[1.75rem] md:text-4xl">
        Aderibigbe Michael O.
      </h1>
      <h3 class="text-lg md:text-xl font-medium">
        Frontend Developer <Icon
          icon="dashicons:smiley"
          class="inline"
          width="20"
          height="20"
        />
      </h3>
      <p class="dark:text-[#888] text-sm font-light">
        Passionate web developer with <span class="font-bold">1+</span> year of experience
        to build all aspects of the user experience and interface for client-facing
        landing pages and websites.
      </p>
    </div>
    <div class="hidden lg:grid gap-3">
      {#each pageLinks as link}
        <a
          href={link.tag}
          class="group relative pl-8 uppercase transition-all duration-300 {activeSection ===
          link.tag.slice(1)
            ? 'font-extrabold dark:text-white'
            : 'font-medium text-[#414141] dark:text-neutral-400'}"
        >
          <span
            class="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] rounded-md dark:bg-neutral-400 transition-all duration-300 group-hover:w-6
          {activeSection === link.tag.slice(1) ? 'w-6 bg-black dark:bg-white' : 'w-4 bg-[#888]'}"
          ></span>
          {link.name}
        </a>
      {/each}
    </div>
    <div class="flex items-center gap-4">
      {#each icons as icon}
        <a href={icon.path}>
          <Icon
            icon={icon.iconName}
            class="hover:text-gray-400 dark:text-white transition"
            width="32"
            height="32"
          />
        </a>
      {/each}
    </div>
  </div>
  <div
    class="lg:w-3/5 h-full space-y-12 lg:overflow-y-auto custom-scrollbar lg:px-4 xl:px-8 md:p-0 dark:text-white"
  >
    <slot />
    <div class="mx-auto w-full p-4">
      <p class="dark:text-[#888] text-sm font-light">
        Built with <span class="font-bold">SvelteKit</span> &
        <span class="font-bold">TailwindCSS</span>😊❤️
      </p>
    </div>
  </div>
</main>
