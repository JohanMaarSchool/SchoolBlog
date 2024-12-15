import type { ImageMetadata } from "astro";

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: ImageMetadata;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  blogs: BlogProps[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  image: ImageMetadata
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: ImageMetadata | string;
  linkPreview?: string;
  linkSource?: string;
  quote?: string;
}

export interface AboutProps {
  description: string;
  image: ImageMetadata;
}

export interface HeaderProps {
  siteLogo: any;
  navLinks: { text: string; href: string }[];
}

export interface BlogProps {
  name: any;
  summary: any;
  image: ImageMetadata | string;
  linkPreview?: string;
  linkSource?: string;
}
