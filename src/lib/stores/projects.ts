import type Project from "$lib/types/Project";
import { readable } from "svelte/store";

export const projects = readable<Project[]>([
	{
		imagePath: "/mathbridge-screenshot.png",
		title: "Mathbridge Edutech Website",
		description:
			"An interactive educational platform for Mathbridge Academy, delivering dynamic STEM learning programs, course showcases, engaging micro-animations, and direct student inquiry and enrollment flows.",
		skillSets: [
			{
				icon: "logos:nextjs-icon",
				skillName: "Next.js",
			},
			{
				icon: "logos:tailwindcss-icon",
				skillName: "TailwindCSS",
			},
			{
				icon: "logos:framer",
				skillName: "Framer Motion",
			},
			{
				icon: "simple-icons:lucide",
				skillName: "Lucide React",
			},
			{
				icon: "carbon:email",
				skillName: "EmailJS",
			},
		],
		urlPath: "https://www.mathbridgeacademy.org",
	},
	{
		imagePath: "/railswitch-img.png",
		title: "RailSwitch",
		description:
			"A full-stack SaaS platform featuring a multi-tenant dashboard and client-facing portal. Includes secure authentication flows, role-based access control, and real-time data management built with a modern monorepo architecture.",
		skillSets: [
			{
				icon: "material-icon-theme:react-ts",
				skillName: "React.js",
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
				icon: "simple-icons:shadcnui",
				skillName: "ShadCN UI",
			},
		],
		urlPath: "https://github.com/moloruntomiwa31",
	},
	{
		imagePath: "/audiophile-img.png",
		title: "Audiophile",
		description:
			"Premium audio equipment e-commerce platform offering high-quality headphones, speakers, and earphones with seamless shopping experience and secure checkout.",
		skillSets: [
			{
				icon: "logos:nextjs-icon",
				skillName: "Next.js",
			},
			{
				icon: "logos:typescript-icon",
				skillName: "TypeScript",
			},
			{
				icon: "devicon:zustand",
				skillName: "Zustand",
			},
			{
				icon: "logos:tailwindcss-icon",
				skillName: "TailwindCSS",
			},
		],
		urlPath: "https://audiophile-31.vercel.app/",
	},
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
				icon: "material-icon-theme:react-ts",
				skillName: "React.js",
			},
			{
				icon: "logos:javascript",
				skillName: "Javascript",
			},
			{
				icon: "devicon:zustand",
				skillName: "Zustand",
			},
			{
				icon: "logos:tailwindcss-icon",
				skillName: "TailwindCSS",
			},
		],
		urlPath: "https://react-kanban-two-lovat.vercel.app/",
	},
	{
		imagePath: "/fta-project-img.png",
		title: "Fundamental Theorem of Arithmetic (FTA) Computational Study",
		description:
			"My final year research project analyzing trial division algorithms for integer prime factorization. Implements four algorithmic variants (Basic, Odd-Only, 6k±1, and Prime-Only with Sieve), deterministic Miller-Rabin primality testing, and performance benchmarks across structured integer datasets.",
		skillSets: [
			{
				icon: "logos:python",
				skillName: "Python",
			},
			{
				icon: "devicon:matplotlib",
				skillName: "Matplotlib",
			},
			{
				icon: "logos:numpy",
				skillName: "NumPy",
			},
			{
				icon: "carbon:function-math",
				skillName: "Algorithms",
			},
		],
		urlPath: "https://github.com/moloruntomiwa31/FTA-PROJECT",
	},
]);
