<script lang="ts">
  import Badge from "$lib/components/Badge.svelte";
  import Card from "$lib/components/Card.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import CustomInput from "$lib/components/CustomInput.svelte";
  import CustomLabel from "$lib/components/CustomLabel.svelte";
  import { fade } from "svelte/transition";
  import { toast } from "$lib/stores/toast";
  import { skills } from "$lib/stores/skills";
  import { experiences } from "$lib/stores/experiences";
  import { projects } from "$lib/stores/projects";
  import Icon from "@iconify/svelte";
  import emailjs from "@emailjs/browser";
  import ogImage from "../../static/ogImage.png";

  const title: string = "Aderibigbe Michael O.";
  const description: string =
    "Innovative Frontend Developer with expertise in Vue.js. Enhancing user experiences and optimizing web performance. Skilled in developing responsive designs and resolving complex code issues. Implemented cutting-edge solutions, demonstrating technical proficiency and problem-solving abilities.";

    //contact & sendMail
  let emailInput: string = "";
  let fullNameInput: string = "";
  let messageInput: string = "";
  let sendingMail: boolean = false;

  // Add validation state
  let errors = {
    fullName: "",
    email: "",
    message: "",
  };

  // Validation functions
  const validateFullName = (name: string): boolean => {
    if (name.trim().length < 8) {
      errors.fullName = "Full name must be at least 8 characters long";
      return false;
    }
    errors.fullName = "";
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
      return false;
    }
    errors.email = "";
    return true;
  };

  const validateMessage = (message: string): boolean => {
    if (message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
      return false;
    }
    errors.message = "";
    return true;
  };

  const sendEmail = async (e: Event) => {
    // Validate all fields
    const isFullNameValid = validateFullName(fullNameInput);
    const isEmailValid = validateEmail(emailInput);
    const isMessageValid = validateMessage(messageInput);

    // Only proceed if all validations pass
    if (isFullNameValid && isEmailValid && isMessageValid) {
      sendingMail = true;
      try {
        const response = await emailjs.sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          e.target as HTMLFormElement,
          {
            publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
          }
        );

        if (response.status === 200 || response.text === "OK") {
          toast.set({
            type: "success",
            message: "Message successfully sent!",
          });
          // Clear inputs on success
          fullNameInput = "";
          emailInput = "";
          messageInput = "";
        }
      } catch (error) {
        toast.set({
          type: "error",
          message: "Failed to send email. Please try again.",
        });
      } finally {
        sendingMail = false;
      }
    }
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content={ogImage} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<section id="about" class="space-y-8 section-container">
  <div class="section-header p-4 bg-black text-white dark:bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">About Me</h2>
  </div>
  <div class="p-4 lg:p-0 space-y-8 section-content">
    <p class="text-base dark:text-[#888]">
      {description}
    </p>
    <div class="tools space-y-4">
      <h3 class="font-bold">Tools and Languages</h3>
      <div
        class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6 gap-3"
      >
        {#each $skills as badge}
          <Badge content={badge} size={'36'} />
        {/each}
      </div>
    </div>
  </div>
</section>

<section id="experience" class="space-y-8 section-container">
  <div class="section-header p-4 bg-black text-white dark:bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">My Experiences</h2>
  </div>
  <div class="section-content">
    {#each $experiences as experience}
      <a href={experience.path} target="_blank">
        <Card content={experience} />
      </a>
    {/each}
    <div class="resume flex items-center px-4 group">
      <a
        href={import.meta.env.VITE_RESUME_LINK}
        target="_blank"
        class="font-bold whitespace-nowrap text-sm">View Full Resume</a
      >
      <Icon
        icon="tabler:arrow-up-right"
        class="dark:text-white transition-transform transform group-hover:translate-y-[-3px] group-hover:translate-x-[3px]"
        width="1.4rem"
        height="1.4rem"
      />
    </div>
  </div>
</section>

<section id="project" class="section-container">
  <div class="section-header p-4 bg-black text-white dark:bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">My Projects</h2>
  </div>
  <div class="section-content">
    {#each $projects as project}
      <a href={project.urlPath} target="_blank">
        <ProjectCard content={project} />
      </a>
    {/each}
  </div>
</section>

<section id="contact" class="section-container">
  <div class="section-header p-4 bg-black text-white dark:bg-[#2d2d2d] md:rounded-md lg:hidden">
    <h2 class="uppercase font-bold">Contact Me</h2>
  </div>
  <form
    class="p-4 space-y-8 section-content"
    on:submit|preventDefault={sendEmail}
  >
    <div class="space-y-2">
      <CustomLabel content="Full Name" usage="name" />
      <CustomInput
        type="text"
        name="from_name"
        placeholder="Enter full name here"
        bind:value={fullNameInput}
        on:input={() => validateFullName(fullNameInput)}
      />
      {#if errors.fullName}
        <p class="text-red-500 text-sm mt-1" transition:fade>
          {errors.fullName}
        </p>
      {/if}
    </div>
    <div class="space-y-2">
      <CustomLabel content="Email Address" usage="email" />
      <CustomInput
        type="email"
        name="from_email"
        placeholder="Enter email address here"
        bind:value={emailInput}
        on:input={() => validateEmail(emailInput)}
      />
      {#if errors.email}
        <p class="text-red-500 text-sm mt-1" transition:fade>{errors.email}</p>
      {/if}
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
        on:input={() => validateMessage(messageInput)}
        class="bg-black dark:bg-[#2d2d2d] text-white outline-none rounded-tl-lg rounded-br-lg p-4 w-full transition focus:shadow-sm focus:shadow-[#888] placeholder:text-neutral-50 dark:placeholder:text-neutral-500 font-light"
      ></textarea>
      {#if errors.message}
        <p class="text-red-500 text-sm mt-1" transition:fade>
          {errors.message}
        </p>
      {/if}
    </div>
    <button
      type="submit"
      class="inline-flex items-center gap-1 outline-none bg-black dark:bg-[#2d2d2d] text-white py-2 px-4 rounded-tl-lg rounded-br-lg transition hover:bg-[#333] group disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={sendingMail}
    >
      <span>Send</span>
      {#if !sendingMail}
        <Icon
          icon="majesticons:send-line"
          class="dark:text-white transition-transform transform group-hover:translate-x-[3px]"
          width="1rem"
          height="1rem"
        />
      {:else}
        <Icon
          icon="gg:spinner"
          class="dark:text-white animate-spin"
          width="1.2rem"
          height="1.2rem"
        />
      {/if}
    </button>
  </form>
</section>

<style>
  @media (max-width: 668px) {
    .section-container {
      position: relative;
    }

    .section-header {
      position: sticky;
      top: 0;
      z-index: 990;
      transition: opacity 0.3s ease;
    }
    .section-content {
      position: relative;
    }
  }
</style>
