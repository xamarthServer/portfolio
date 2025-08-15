import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type SectionLink = (typeof links)[number]["hash"];
