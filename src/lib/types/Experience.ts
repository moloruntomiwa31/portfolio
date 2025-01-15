import type SkillSet from "$lib/types/SkillSet";

export default interface Experience {
  date: string;
  title: string;
  description: string;
  badges: SkillSet[];
  path: string;
}
