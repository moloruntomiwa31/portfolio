<script>
  import "../app.css";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

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
  let observer;

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
      { threshold: 0.5 }
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

<main
  class="flex flex-col lg:flex-row items-center gap-16 xl:gap-4 justify-between w-full h-screen md:px-8 md:py-8 xl:px-20 xl:py-20"
>
  <div class="text-white h-full space-y-6 px-4 lg:w-2/5 xl:space-y-14 pt-6">
    <div class="space-y-1">
      <h1 class="font-extrabold text-[1.75rem] md:text-4xl">
        Aderibigbe Michael
      </h1>
      <h3 class="text-lg md:text-xl font-medium">
        Frontend Developer <Icon
          icon="dashicons:smiley"
          class="inline"
          width="20"
          height="20"
        />
      </h3>
      <p class="text-white text-sm font-light">
        Passionate web developer with <span class="font-bold">1+</span> year of experience
        to build all aspects of the user experience and interface for client-facing
        landing pages and websites.
      </p>
    </div>
    <div class="hidden lg:grid gap-3">
      {#each pageLinks as link}
        <a
          href={link.tag}
          class="uppercase hover:text-neutral-300 transition duration-200 {activeSection ===
          link.tag.slice(1)
            ? 'font-extrabold text-white'
            : 'font-medium text-neutral-400 '}"
        >
          {link.name}
        </a>
      {/each}
    </div>
    <div class="flex items-center gap-4">
      {#each icons as icon}
        <a href={icon.path}>
          <Icon
            icon={icon.iconName}
            class="hover:text-gray-400 text-white transition"
            width="32"
            height="32"
          />
        </a>
      {/each}
    </div>
  </div>
  <div
    class="lg:w-3/5 h-full space-y-12 lg:overflow-y-auto custom-scrollbar lg:px-4 xl:px-8 md:p-0 text-white"
  >
    <slot />
  </div>
</main>
