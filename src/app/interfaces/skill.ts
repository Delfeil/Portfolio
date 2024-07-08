import { SkillsCategory } from "../enums/skills-category";

export interface Skill {
    category: SkillsCategory,
    name: string,
    link: string,
    description: string
}
