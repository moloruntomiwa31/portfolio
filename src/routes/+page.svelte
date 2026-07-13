<script lang="ts">
  import Badge from "$lib/components/Badge.svelte";
  import Card from "$lib/components/Card.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { fade, fly } from "svelte/transition";
  import { toast } from "$lib/stores/toast";
  import { skills } from "$lib/stores/skills";
  import { experiences } from "$lib/stores/experiences";
  import { projects } from "$lib/stores/projects";
  import Icon from "@iconify/svelte";
  import emailjs from "@emailjs/browser";
  import ogImage from "../../static/ogImage.png";

  const title = "Aderibigbe Michael O. — Frontend Developer";
  const description =
    "Frontend Developer specializing in Vue.js, React.js, and Next.js. Building high-performance, accessible web experiences with 3+ years of hands-on experience. Currently at Stranerd, delivering modern edu-tech solutions.";

  // Contact form
  let emailInput = "";
  let fullNameInput = "";
  let messageInput = "";
  let sendingMail = false;

  let errors = { fullName: "", email: "", message: "" };

  const validateFullName = (name: string): boolean => {
    if (name.trim().length < 8) {
      errors.fullName = "Full name must be at least 8 characters";
      return false;
    }
    errors.fullName = "";
    return true;
  };

  const validateEmail = (email: string): boolean => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
      return false;
    }
    errors.email = "";
    return true;
  };

  const validateMessage = (message: string): boolean => {
    if (message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      return false;
    }
    errors.message = "";
    return true;
  };

  const sendEmail = async (e: Event) => {
    const isFullNameValid = validateFullName(fullNameInput);
    const isEmailValid = validateEmail(emailInput);
    const isMessageValid = validateMessage(messageInput);

    if (isFullNameValid && isEmailValid && isMessageValid) {
      sendingMail = true;
      try {
        const response = await emailjs.sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          e.target as HTMLFormElement,
          { publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY }
        );
        if (response.status === 200 || response.text === "OK") {
          toast.set({ type: "success", message: "Message sent successfully! 🚀" });
          fullNameInput = "";
          emailInput = "";
          messageInput = "";
        }
      } catch {
        toast.set({ type: "error", message: "Failed to send. Please try again." });
      } finally {
        sendingMail = false;
      }
    }
  };

  // Group skills into categories
  const skillGroups = [
    {
      label: "Frameworks",
      skills: $skills.filter(s => ["Vue.js","Nuxt.js","React.js","Next.js","Node.js","Express.js"].includes(s.skillName)),
    },
    {
      label: "Languages",
      skills: $skills.filter(s => ["JavaScript","TypeScript","HTML5","CSS3","SCSS"].includes(s.skillName)),
    },
    {
      label: "Tools & Platforms",
      skills: $skills.filter(s => ["TailwindCSS","Bootstrap","ShadCNUI","Pinia","PostgreSQL","Git","GitHub","Firebase","Vercel","Gemini"].includes(s.skillName)),
    },
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<!-- ========== ABOUT ========== -->
<section id="about" class="section-container space-y-10">
  <!-- Mobile sticky header -->
  <div class="section-sticky-header lg:hidden -mx-5 md:-mx-10 px-5 md:px-10 py-4 mb-6"
    style="background: rgba(5,8,17,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(99,102,241,0.15);">
    <p class="section-eyebrow">About</p>
  </div>

  <!-- Desktop eyebrow -->
  <div class="hidden lg:block">
    <p class="section-eyebrow">About</p>
  </div>

  <!-- Bio card -->
  <div class="glass-card p-7 space-y-5 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.07] -translate-y-1/2 translate-x-1/2"
      style="background: radial-gradient(circle, #6366f1, transparent);">
    </div>
    <p class="text-[0.92rem] leading-[1.85] text-slate-400">
      Hey, I'm <span class="text-slate-200 font-semibold">Michael</span> — a frontend developer from Lagos. 
      I've spent the past few years building things for the web, mostly with 
      <span class="text-indigo-300">Vue.js</span> and <span class="text-indigo-300">React</span>,
      though I'm pretty comfortable jumping between whatever the project needs.
    </p>
    <p class="text-[0.92rem] leading-[1.85] text-slate-400">
      Right now I'm working at <span class="text-slate-300 font-medium">Stranerd</span>, an edu-tech startup where I mostly deal with
      the frontend — components, performance, integrations, that kind of thing.
    </p>
    <p class="text-[0.92rem] leading-[1.85] text-slate-400">
      Outside work I make content on TikTok, I'm a Photographer and Creative, keep tabs on what's new in the JS ecosystem, and occasionally get way too deep into UI details that most people never notice.
    </p>
  </div>

  <!-- Skills grouped -->
  <div class="space-y-6">
    {#each skillGroups as group}
      <div class="space-y-3">
        <h3 class="text-[0.67rem] font-semibold tracking-[0.14em] uppercase text-slate-600">{group.label}</h3>
        <div class="flex flex-wrap gap-2">
          {#each group.skills as skill}
            <Badge content={skill} size="15" />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- ========== EXPERIENCE ========== -->
<section id="experience" class="section-container space-y-6">
  <!-- Mobile sticky header -->
  <div class="section-sticky-header lg:hidden -mx-5 md:-mx-10 px-5 md:px-10 py-4 mb-6"
    style="background: rgba(5,8,17,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(99,102,241,0.15);">
    <p class="section-eyebrow">Experience</p>
  </div>

  <!-- Desktop eyebrow -->
  <div class="hidden lg:block">
    <p class="section-eyebrow">Experience</p>
  </div>

  <div class="grid gap-3">
    {#each $experiences as experience}
      <a href={experience.path} target="_blank" rel="noopener noreferrer">
        <Card content={experience} />
      </a>
    {/each}
  </div>

  <!-- View Resume CTA -->
  <a
    href={import.meta.env.VITE_RESUME_LINK}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 group"
  >
    <span class="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300 underline underline-offset-4 decoration-indigo-500/30 group-hover:decoration-indigo-400">
      View Full Résumé
    </span>
    <Icon
      icon="tabler:arrow-up-right"
      class="text-indigo-400 group-hover:text-indigo-300 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[2px]"
      width="1.1rem"
      height="1.1rem"
    />
  </a>
</section>

<!-- ========== PROJECTS ========== -->
<section id="project" class="section-container grid gap-4">
  <!-- Mobile sticky header -->
  <div class="section-sticky-header lg:hidden -mx-5 md:-mx-10 px-5 md:px-10 py-4 mb-6"
    style="background: rgba(5,8,17,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(99,102,241,0.15);">
    <p class="section-eyebrow">Projects</p>
  </div>

  <!-- Desktop eyebrow -->
  <div class="hidden lg:block">
    <p class="section-eyebrow">Projects</p>
  </div>

  <div class="grid gap-4">
    {#each $projects as project}
      <a href={project.urlPath} target="_blank" rel="noopener noreferrer">
        <ProjectCard content={project} />
      </a>
    {/each}
  </div>
</section>

<!-- ========== CONTACT ========== -->
<section id="contact" class="section-container space-y-6">
  <!-- Mobile sticky header -->
  <div class="section-sticky-header lg:hidden -mx-5 md:-mx-10 px-5 md:px-10 py-4 mb-6"
    style="background: rgba(5,8,17,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(99,102,241,0.15);">
    <p class="section-eyebrow">Contact</p>
  </div>

  <!-- Desktop eyebrow -->
  <div class="hidden lg:block">
    <p class="section-eyebrow">Contact</p>
  </div>

  <div class="glass-card p-7 space-y-2">
    <h2 class="font-display text-xl text-white">Get in touch</h2>
    <p class="text-[0.9rem] text-slate-500 leading-relaxed">
      Working on something cool? Have a role you think I'd be a good fit for? Or just want to talk? Feel free to reach out.
    </p>
  </div>

  <form class="space-y-5" on:submit|preventDefault={sendEmail}>
    <!-- Full Name -->
    <div class="space-y-1.5">
      <label for="name" class="block text-xs font-semibold tracking-widest uppercase text-slate-500">Full Name</label>
      <input
        id="name"
        type="text"
        name="from_name"
        placeholder="e.g. John Doe"
        class="neo-input"
        bind:value={fullNameInput}
        on:input={() => validateFullName(fullNameInput)}
      />
      {#if errors.fullName}
        <p class="text-red-400 text-xs mt-1 flex items-center gap-1" transition:fade>
          <Icon icon="mingcute:alert-fill" width="12" height="12" />
          {errors.fullName}
        </p>
      {/if}
    </div>

    <!-- Email -->
    <div class="space-y-1.5">
      <label for="email" class="block text-xs font-semibold tracking-widest uppercase text-slate-500">Email Address</label>
      <input
        id="email"
        type="email"
        name="from_email"
        placeholder="e.g. john@example.com"
        class="neo-input"
        bind:value={emailInput}
        on:input={() => validateEmail(emailInput)}
      />
      {#if errors.email}
        <p class="text-red-400 text-xs mt-1 flex items-center gap-1" transition:fade>
          <Icon icon="mingcute:alert-fill" width="12" height="12" />
          {errors.email}
        </p>
      {/if}
    </div>

    <!-- Message -->
    <div class="space-y-1.5">
      <label for="message" class="block text-xs font-semibold tracking-widest uppercase text-slate-500">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Tell me about your project or opportunity..."
        rows="5"
        style="resize: none;"
        class="neo-input"
        bind:value={messageInput}
        on:input={() => validateMessage(messageInput)}
      ></textarea>
      {#if errors.message}
        <p class="text-red-400 text-xs mt-1 flex items-center gap-1" transition:fade>
          <Icon icon="mingcute:alert-fill" width="12" height="12" />
          {errors.message}
        </p>
      {/if}
    </div>

    <!-- Submit -->
    <button type="submit" class="btn-primary" disabled={sendingMail}>
      {#if !sendingMail}
        <span>Send Message</span>
        <Icon icon="majesticons:send-line" width="16" height="16" />
      {:else}
        <Icon icon="gg:spinner" class="animate-spin" width="16" height="16" />
        <span>Sending...</span>
      {/if}
    </button>
  </form>
</section>

<style>
  .section-container {
    padding-bottom: 1rem;
  }
</style>
