import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Katherine Murcia",
  EMAIL: "mkmurcia@unbosque.edu.co",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Portafolio de Bases de Datos 2 — Katherine Murcia.",
};

export const ABOUT: Metadata = {
  TITLE: "Sobre mí",
  DESCRIPTION: "Un poco sobre mí y presentación.",
};

export const BLOG: Metadata = {
  TITLE: "Trabajos en clase",
  DESCRIPTION: "Ejercicios trabajados en cada clase organizados por fecha",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Entregas del cursos del semestre.",
};

export const SOCIALS: Socials = [
  { NAME: "github", HREF: "https://github.com/KatherineMurcia" },

];