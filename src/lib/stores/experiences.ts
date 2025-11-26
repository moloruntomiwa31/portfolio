import type Experience from "$lib/types/Experience";
import { readable } from "svelte/store";

export const experiences = readable<Experience[]>([
  {
    date: "October - November 2025",
    title: "Frontend Developer, HNG Internship",
    description:
      "Participated in the HNG internship program, gaining hands-on experience in frontend development. Worked on real-world projects, collaborated with cross-functional teams, and enhanced skills in modern web development technologies and best practices.",
    badges: [
      {
        icon: "logos:javascript",
        skillName: "JavaScript",
      },
      {
        icon: "logos:react",
        skillName: "React",
      },
      {
        icon: "logos:nextjs-icon",
        skillName: "Next.js",
      },
      {
        icon: "logos:typescript-icon",
        skillName: "TypeScript",
      },
      {
        icon: "logos:vue",
        skillName: "Vue.js",
      },
      {
        icon: "logos:tailwindcss-icon",
        skillName: "TailwindCSS",
      },
      {
        icon: "logos:html-5",
        skillName: "HTML5",
      },
      {
        icon: "logos:css-3",
        skillName: "CSS3",
      },
    ],
    path: "https://hng.tech",
  },
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
    date: "June 2023 - December 2024",
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
