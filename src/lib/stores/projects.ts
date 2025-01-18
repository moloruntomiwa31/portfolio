import type Project from "$lib/types/Project";
import { readable } from "svelte/store";

export const projects = readable<Project[]>([
  {
    imagePath: "/devlinks-img.png",
    title: "Devlinks",
    description:
      "A profile-building app for developers to create and preview custom profiles. Shareable links enable easy sharing with others.",
    skillSets: [
      {
        icon: "logos:nuxt-icon",
        skillName: "Nuxt.js",
      },
      {
        icon: "logos:typescript-icon",
        skillName: "Typescript",
      },
      {
        icon: "logos:firebase",
        skillName: "Firebase",
      },
      {
        icon: "logos:pinia",
        skillName: "Pinia",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
    ],
    urlPath: "https://devlinks-31.vercel.app/",
  },
  {
    imagePath: "/nutri-lens-img.png",
    title: "Nutri-Lens",
    description:
      "Nutri-lens is a cutting-edge nutritional assistant designed to revolutionize your health and meal planning journey! It provides personalized meal plans, recipes, and nutritional information.",
    skillSets: [
      {
        icon: "logos:nuxt-icon",
        skillName: "Nuxt.js",
      },
      {
        icon: "logos:typescript-icon",
        skillName: "Typescript",
      },
      {
        icon: "logos:firebase",
        skillName: "Firebase",
      },
      {
        icon: "ri:gemini-fill",
        skillName: "Gemini",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
    ],
    urlPath: "https://nutri-lens.vercel.app/",
  },
  {
    imagePath: "/kanban.png",
    title: "Kanban Task Manager",
    description:
      "A task manager app for organizing tasks into boards with customizable columns where tasks can have description, subtasks.",
    skillSets: [
      {
        icon: "logos:vue",
        skillName: "Vue.js",
      },
      {
        icon: "logos:typescript-icon",
        skillName: "Typescript",
      },
      {
        icon: "logos:firebase",
        skillName: "Firebase",
      },
      {
        icon: "logos:pinia",
        skillName: "Pinia",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
    ],
    urlPath: "https://kanban-task-manager-31.vercel.app/",
  },
  {
    imagePath: "/dashboard-img.png",
    title: "Dashboard Clone",
    description:
      "An e-commerce dashboard clone displaying data analytics and product details using charts. Includes a theme switcher for an enhanced user experience.",
    skillSets: [
      {
        icon: "logos:nuxt-icon",
        skillName: "Nuxt.js",
      },
      {
        icon: "simple-icons:shadcnui",
        skillName: "ShadCNUI",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
      {
        icon: "logos:highcharts",
        skillName: "ApexCharts",
      },
    ],
    urlPath: "https://dashboard-clone-delta.vercel.app/",
  },
  {
    imagePath: "/cinemax-img.png",
    title: "Cinemax",
    description:
      "A movie app where users can discover trending movies and series, watch trailers, and search for specific titles to get detailed information.",
    skillSets: [
      {
        icon: "logos:vue",
        skillName: "Vue.js",
      },
      {
        icon: "logos:typescript-icon",
        skillName: "Typescript",
      },
      {
        icon: "logos:pinia",
        skillName: "Pinia",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
    ],
    urlPath: "https://cinemax-31.vercel.app/",
  },
  {
    imagePath: "/bookmark-img.png",
    title: "Bookmark Landing Page",
    description:
      "A minimalist landing page for a bookmarking app, designed for simplicity and ease of use.",
    skillSets: [
      {
        icon: "logos:svelte-icon",
        skillName: "Svelte.js",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
    ],
    urlPath: "https://bookmark-landing-blush.vercel.app/",
  },
]);
