import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Kathe Murcia", // pon tu nombre
  EMAIL: "mkmurcia@unbosque.edu.co",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Presentación",
  DESCRIPTION: "Portafolio de Bases de Datos 2 — SQL, PL/SQL, NoSQL y proyecto final.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Artículos y notas del curso.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Evidencias",
  DESCRIPTION: "SQL, PL/SQL Scripts, NoSQL y Proyecto final de Bases de Datos 2.",
};

export const SOCIALS: Socials = [
  { NAME: "github", HREF: "https://github.com/tu-usuario" },
  { NAME: "linkedin", HREF: "https://www.linkedin.com/in/tu-usuario" },
];
