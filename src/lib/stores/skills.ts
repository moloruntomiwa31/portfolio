import { readable } from "svelte/store";
import type SkillSet from "$lib/types/SkillSet";

export const skills = readable<SkillSet[]>([
	{ icon: "logos:vue", skillName: "Vue.js" },
	{ icon: "logos:nuxt-icon", skillName: "Nuxt.js" },
	{ icon: "logos:pinia", skillName: "Pinia" },
	{ icon: "material-icon-theme:react-ts", skillName: "React.js" },
	// { icon: "logos:svelte-icon", skillName: "Svelte.js" },
	{ icon: "devicon:nodejs", skillName: "Node.js" },
	{ icon: "skill-icons:expressjs-light", skillName: "Express.js" },
	{ icon: "devicon:postgresql", skillName: "PostgreSQL" },
	{ icon: "logos:tailwindcss-icon", skillName: "TailwindCSS" },
	{ icon: "logos:bootstrap", skillName: "Bootstrap" },
	{ icon: "simple-icons:shadcnui", skillName: "ShadCNUI" },
	{ icon: "logos:javascript", skillName: "JavaScript" },
	{ icon: "logos:typescript-icon", skillName: "TypeScript" },
	{ icon: "logos:html-5", skillName: "HTML5" },
	{ icon: "logos:css-3", skillName: "CSS3" },
	{ icon: "vscode-icons:file-type-scss2", skillName: "SCSS" },
	{ icon: "logos:git-icon", skillName: "Git" },
	{ icon: "ri:github-fill", skillName: "GitHub" },
	{ icon: "logos:firebase", skillName: "Firebase" },
	{ icon: "ri:vercel-fill", skillName: "Vercel" },
	{ icon: "ri:gemini-fill", skillName: "Gemini" },
]);
