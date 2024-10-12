import type Experience from "$lib/types/Experience";
import { readable } from "svelte/store";

export const experiences = readable<Experience[]>([
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
]);
