import type Experience from "$lib/types/Experience";
import { readable } from "svelte/store";

export const experiences = readable<Experience[]>([
  {
    date: "May 2024 - Present",
    title: "Frontend Developer, Stranerd",
    description:
      "Stranerd is an edu-tech company focused on digitalizing all aspects of education. At Stranerd, I build and maintain web components and layouts, optimize web applications, enhance landing pages, and integrate RESTful APIs to ensure real-time data flow.",
    badges: [
      {
        icon: "logos:vue",
        skillName: "Vue.js",
      },
      {
        icon: "logos:typescript-icon",
        skillName: "Typescript",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
      {
        icon: "logos:figma",
        skillName: "Figma",
      },
    ],
    path: "https://stranerd.com",
  },
  {
    date: "June 2023 - Present",
    title: "Frontend Developer, AG GLOWSENSE",
    description:
      "AG-GLOWSENSE is a beauty, cosmetics, and skincare company specializing in delivering high-quality products. I developed and I am maintaining the full-stack e-commerce platform, focusing on optimizing frontend performance and responsiveness. I also implemented secure user authentication and data storage, while integrating the Gemini Chat Assistant to improve customer support.",
    badges: [
      {
        icon: "logos:vue",
        skillName: "Vue.js",
      },
      {
        icon: "logos:javascript",
        skillName: "JavaScript",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
      {
        icon: "logos:pinia",
        skillName: "Pinia",
      },
      {
        icon: "logos:firebase",
        skillName: "Firebase",
      },
      {
        icon: "ri:vercel-fill",
        skillName: "Vercel",
      },
      {
        icon: "ri:gemini-fill",
        skillName: "Gemini",
      },
    ],
    path: "https://ag-glowsense.vercel.app/",
  },
]);
