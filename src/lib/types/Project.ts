import type SkillSet from "$lib/types/SkillSet";

export default interface Project {
  imagePath: string;
  title: string;
  description: string;
  skillSets: SkillSet[];
  urlPath: string;
}
