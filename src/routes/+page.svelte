<script>
  import Badge from "../components/Badge.svelte";
  import Card from "../components/Card.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import CustomInput from "../components/CustomInput.svelte";
  import CustomLabel from "../components/CustomLabel.svelte";
  import Icon from "@iconify/svelte";

  const skillBadges = [
    "Vue.js",
    "Nuxt.js",
    "Pinia",
    "Svelte",
    "TailwindCSS",
    "Bootstrap",
    "Shadcn",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SCSS",
    "Git",
    "GitHub",
    "Firebase",
    "Vercel",
  ];

  let experiences = [
    {
      date: "May 2024 - Present",
      title: "Frontend Developer, Stranerd",
      description:
        "Stranerd is an edu-tech company focused on digitalizing all aspects of education. At Stranerd, I build and maintain web components and layouts, optimize web applications, enhance landing pages, and integrate RESTful APIs to ensure real-time data flow.",
      badges: ["Vuejs", "TypeScript", "TailwindCSS", "Figma"],
      path: "https://stranerd.com",
    },
    {
      date: "June 2023 - Present",
      title: "Frontend Developer, AG GLOWSENSE",
      description:
        "AG-GLOWSENSE is a beauty, cosmetics, and skincare company specializing in delivering high-quality products. I developed and I am maintaining the full-stack e-commerce platform, focusing on optimizing frontend performance and responsiveness. I also implemented secure user authentication and data storage, while integrating the Gemini AI Chat Assistant to improve customer support.",
      badges: [
        "Vuejs",
        "JavaScript",
        "TailwindCSS",
        "Pinia",
        "Firebase",
        "Vercel",
        "Gemini AI",
      ],
      path: "https://ag-glowsense.vercel.app/",
    },
  ];
  let projects = [
    {
      imagePath: "/devlinks-img.png",
      title: "Devlinks",
      description:
        "A profile-building app for developers to create and preview custom profiles. Shareable links enable easy sharing with others.",
      skillSets: [
        "Nuxt 3",
        "Typescript",
        "Firebase",
        "Pinia",
        "TailwindCSS",
      ],
      urlPath: "https://devlinks-31.vercel.app/",
    },
    {
      imagePath: "/kanban.png",
      title: "Kanban Task Manager",
      description:
        "A task manager app for organizing tasks into boards with customizable columns where tasks can have description, subtasks.",
      skillSets: [
        "Vue 3",
        "Typescript",
        "Firebase",
        "Pinia",
        "TailwindCSS",
      ],
      urlPath: "https://kanban-task-manager-31.vercel.app/",
    },
    {
      imagePath: "/dashboard-img.png",
      title: "Dashboard Clone",
      description:
        "An e-commerce dashboard clone displaying data analytics and product details using charts. Includes a theme switcher for an enhanced user experience.",
      skillSets: ["Nuxt 3", "Shadcn", "TailwindCSS", "Fake Api", "ApexCharts"],
      urlPath: "https://dashboard-clone-delta.vercel.app/",
    },
    {
      imagePath: "/cinemax-img.png",
      title: "Cinemax",
      description:
        "A movie app where users can discover trending movies and series, watch trailers, and search for specific titles to get detailed information.",
      skillSets: ["Vue 3", "SCSS", "TailwindCSS", "Pinia", "TMDB API"],
      urlPath: "https://cinemax-31.vercel.app/",
    },
    {
      imagePath: "/bookmark-img.png",
      title: "Bookmark Landing Page",
      description:
        "A minimalist landing page for a bookmarking app, designed for simplicity and ease of use.",
      skillSets: ["Svelte", "TailwindCSS"],
      urlPath: "https://bookmark-landing-blush.vercel.app/",
    },
  ];

  //contact
  let emailInput = "";
  let fullNameInput = "";
  let messageInput = "";
</script>

<section id="about" class="space-y-8">
  <div class="detail p-4 bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">About</h2>
  </div>
  <div class="p-4 lg:p-0 space-y-8">
    <p class="text-base">
      Innovative Frontend Developer with expertise in Vue.js. Enhancing user
      experiences and optimizing web performance. Skilled in developing
      responsive designs and resolving complex code issues. Implemented
      cutting-edge solutions, demonstrating technical proficiency and
      problem-solving abilities.
    </p>
    <div class="tools space-y-4">
      <h3 class="font-bold">Tools and Languages</h3>
      <div
        class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-5 gap-3"
      >
        {#each skillBadges as badge}
          <Badge content={badge} />
        {/each}
      </div>
    </div>
  </div>
</section>

<section id="experience" class="space-y-8">
  <div class="detail p-4 bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">Experience</h2>
  </div>
  {#each experiences as experience}
    <!-- content here -->
    <a href={experience.path} target="_blank">
      <Card content={experience} />
    </a>
  {/each}
  <div class="resume flex items-center px-4 group">
    <h3 class="font-bold whitespace-nowrap text-sm">View Full Resume</h3>
    <Icon
      icon="tabler:arrow-up-right"
      class="text-white transition-transform transform group-hover:translate-y-[-3px] group-hover:translate-x-[3px]"
      width="1.4rem"
      height="1.4rem"
    />
  </div>
</section>

<section id="project">
  <div class="detail p-4 bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">Project</h2>
  </div>
  {#each projects as project}
    <!-- content here -->
    <a href={project.urlPath} target="_blank">
      <ProjectCard content={project} />
    </a>
  {/each}
</section>

<section id="contact">
  <div class="detail p-4 bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">Contact</h2>
  </div>
  <form class="p-4 space-y-8">
    <div class="space-y-2">
      <CustomLabel content="Full Name" usage="name" />
      <CustomInput
        type="text"
        placeholder="Enter full name here"
        on:input={(e) => (fullNameInput = e.detail)}
      />
    </div>
    <div class="space-y-2">
      <CustomLabel content="Email Address" usage="email" />
      <CustomInput
        type="email"
        placeholder="Enter email address here"
        on:input={(e) => (emailInput = e.detail)}
      />
    </div>
    <div class="space-y-2 grid">
      <CustomLabel content="Message" usage="message" />
      <textarea
        name="message"
        id="message"
        placeholder="Enter message here"
        cols="10"
        rows="5"
        style="resize: none;"
        bind:value={messageInput}
        class="bg-[#2d2d2d] outline-none rounded-tl-lg rounded-br-lg p-4 w-full tra nsition focus:shadow-sm focus:shadow-[#888] placeholder:text-neutral-500 placeholder:font-light"
      ></textarea>
    </div>
    <button
      type="submit"
      class="inline-flex items-center gap-1 bg-[#2d2d2d] text-white py-2 px-4 rounded-tl-lg rounded-br-lg transition hover:bg-[#333] group"
      ><span>Send</span>
      <Icon
        icon="majesticons:send-line"
        class="text-white transition-transform transform group-hover:translate-x-[3px]"
        width="1rem"
        height="1rem"
      /></button
    >
  </form>
</section>
