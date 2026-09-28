<script lang="ts">
  import "../app.css";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import Toast from "$lib/components/Toast.svelte";

  const socialMediaPages = [
    {
      iconName: "ri:github-fill",
      path: "https://github.com/moloruntomiwa31",
      label: "GitHub",
    },
    {
      iconName: "ri:linkedin-fill",
      path: "https://www.linkedin.com/in/aderibigbe-michael-2b2a7823a/",
      label: "LinkedIn",
    },
    {
      iconName: "ri:twitter-x-fill",
      path: "https://x.com/_tomthegrapher",
      label: "Twitter / X",
    },
    {
      iconName: "akar-icons:tiktok-fill",
      path: "https://www.tiktok.com/@luv_oloruntomiwa",
      label: "TikTok",
    },
    {
      iconName: "ic:sharp-whatsapp",
      path: "https://wa.me/message/6CDKR64EPE7MH1",
      label: "WhatsApp",
    },
  ];

  const pageLinks = [
    { name: "About", tag: "#about" },
    { name: "Experience", tag: "#experience" },
    { name: "Projects", tag: "#project" },
    { name: "Contact", tag: "#contact" },
  ];

  let activeSection = "";
  let observer: IntersectionObserver;
  let mounted = false;

  // Stars config
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.6 + 0.1,
  }));

  const initializeObserver = () => {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
  };

  onMount(() => {
    mounted = true;
    initializeObserver();
    const handleResize = () => initializeObserver();
    window.addEventListener("resize", handleResize);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  });

  const getYear = () => new Date().getFullYear() - 2023;
</script>

<Toast />

<!-- Starfield Background -->
<div class="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
  <!-- Deep gradient background -->
  <div class="absolute inset-0" style="background: radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.06) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(167,139,250,0.05) 0%, transparent 50%), #050811;"></div>
  
  <!-- Stars -->
  {#each stars as star (star.id)}
    <div
      class="star absolute rounded-full bg-white"
      style="
        left: {star.x}%;
        top: {star.y}%;
        width: {star.size}px;
        height: {star.size}px;
        opacity: {star.opacity};
        --duration: {star.duration}s;
        --delay: {star.delay}s;
        animation: twinkle var(--duration) ease-in-out infinite;
        animation-delay: var(--delay);
      "
    ></div>
  {/each}

  <!-- Glowing orb left -->
  <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full animate-pulse-glow"
    style="background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%); filter: blur(40px);">
  </div>
  <!-- Glowing orb right -->
  <div class="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full animate-pulse-glow"
    style="background: radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%); filter: blur(40px); animation-delay: 2s;">
  </div>
  <!-- Grid overlay -->
  <div class="absolute inset-0 opacity-[0.03]"
    style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;">
  </div>
</div>

<!-- Main Layout -->
<main class="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1440px] mx-auto px-5 md:px-10 xl:px-20 py-12 lg:py-0 gap-8 lg:gap-16">

  <!-- ========== LEFT SIDEBAR ========== -->
  <aside class="lg:w-[380px] xl:w-[420px] shrink-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-20">
    
    <!-- Top: Identity -->
    <div class="space-y-8" class:animate-slide-left={mounted}>
      
      <!-- Avatar + Status -->
      <div class="flex items-center gap-4">
        <div class="relative">
          <div class="w-[68px] h-[68px] rounded-full overflow-hidden border border-white/10 glow-primary">
            <img src="/oloruntomiwa-headshot.jpeg" alt="Aderibigbe Michael" class="w-full h-full object-cover object-top" />
          </div>
          <div class="absolute bottom-0 right-0 status-dot ring-2 ring-[#050811]"></div>
        </div>
        <div>
          <p class="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-indigo-400/80 mb-1">Available for work</p>
          <p class="text-xs text-slate-500">Lagos, Nigeria</p>
        </div>
      </div>

      <!-- Name & Title -->
      <div class="space-y-2.5">
        <h1 class="font-display text-[2.1rem] xl:text-[2.5rem] leading-[1.15] text-white">
          Aderibigbe <span class="text-gradient ">Michael O.</span>
        </h1>
        <div class="flex items-center gap-2">
          <div class="h-px w-6 bg-indigo-500/60"></div>
          <p class="text-[0.82rem] font-medium text-slate-400 tracking-wide italic">Frontend Developer</p>
        </div>
      </div>

      <!-- Bio -->
      <p class="text-[0.83rem] leading-[1.75] text-slate-500 max-w-sm">
        Building for the web for years. I like clean interfaces, fast pages, and getting the details right.
      </p>

      <!-- Desktop Nav -->

      <nav class="hidden lg:flex flex-col gap-1">
        {#each pageLinks as link}
          <a href={link.tag} class="nav-link {activeSection === link.tag.slice(1) ? 'active' : ''}">
            <span class="nav-line"></span>
            {link.name}
          </a>
        {/each}
      </nav>
    </div>

    <!-- Bottom: Socials -->
    <div class="flex items-center gap-3 mt-8 lg:mt-0">
      {#each socialMediaPages as social}
        <a
          href={social.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          class="w-9 h-9 rounded-lg flex items-center justify-center border border-white/8 text-slate-500 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
        >
          <Icon icon={social.iconName} width="18" height="18" />
        </a>
      {/each}
    </div>
  </aside>

  <!-- ========== RIGHT CONTENT ========== -->
  <div class="flex-1 content-scroll lg:py-20 space-y-24 pb-16">
    <slot />

    <!-- Footer -->
    <footer class="pt-8 border-t border-white/5">
      <p class="text-xs text-slate-600">
        Designed & built by <span class="text-indigo-400 font-medium">Aderibigbe Michael</span> · 
        Powered by <span class="text-slate-500 font-medium">SvelteKit</span> & <span class="text-slate-500 font-medium">TailwindCSS</span>
      </p>
    </footer>
  </div>
</main>

<!-- Mobile sticky nav -->
<nav class="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t" style="background: rgba(5,8,17,0.9); backdrop-filter: blur(20px); border-color: rgba(99,102,241,0.15);">
  <div class="flex items-center justify-around py-3 px-4 max-w-sm mx-auto">
    {#each pageLinks as link}
      <a
        href={link.tag}
        class="flex flex-col items-center gap-1 text-[0.6rem] font-semibold tracking-widest uppercase transition-colors duration-300 {activeSection === link.tag.slice(1) ? 'text-indigo-400' : 'text-slate-600 hover:text-slate-400'}"
      >
        {#if link.name === 'About'}
          <Icon icon="ph:user-circle-fill" width="20" height="20" />
        {:else if link.name === 'Experience'}
          <Icon icon="ph:briefcase-fill" width="20" height="20" />
        {:else if link.name === 'Projects'}
          <Icon icon="ph:code-block-fill" width="20" height="20" />
        {:else if link.name === 'Contact'}
          <Icon icon="ph:envelope-simple-fill" width="20" height="20" />
        {/if}
        {link.name}
      </a>
    {/each}
  </div>
</nav>
