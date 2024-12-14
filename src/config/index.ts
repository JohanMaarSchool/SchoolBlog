import type { SiteConfig, SiteContent } from "../types";
import smallImage from "../smallJohan.jpeg";
import johanPic from "../JohanMeerLinkedinFotoEdited.png"
import randomImg from "../spotifu.png"

export const SITE_CONFIG: SiteConfig = {
  title: "Johan Edward — Innovative Developer",
  author: "Johan Edward",
  description:
    "Innovative Developer based in Delft, always looking to innovate!",
  lang: "en",
  siteLogo: smallImage,
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: johanPic,
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Johan Edward",
    specialty: "Innovative developer",
    summary: "Creativity requires the courage to let go of certainties. I will help you to innovate. To dream forward.",
    email: "20149751@student.hhs.nl",
    image: johanPic,
  },
  experience: [
    {
      company: "=Exact",
      position: "Intern Front-end Developer",
      startDate: "2022",
      endDate: "2023",
      summary: [
        "Research & development of a custom React UI-library, and implementing it in an Angular application,",
      ],
    },
  ],
  blogs: [
    {
      name: "Big Five Personality",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: randomImg,
    },
    {
      name: "De Kleurentest van Caluwe",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: randomImg,
    },
    {
      name: "Persoonlijk Leiderschap",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: randomImg,
    },
    {
      name: "Circle of Concern & Circle of Influence",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: randomImg,
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: randomImg,
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: randomImg,
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: randomImg,
    },
  ],
  about: {
    description: `
Hello there! My name is Johan. A driven and innovative developer with a proven track record of developing projects within scrum teams. 
Specializing in problem-solving with JavaScript, Python and developing user-friendly front-end solutions. 
During my study, there is a strong emphasis on collaboration with teammates, stakeholders and clients. 
Because only together can we build products that add real value and help others move forward!


    `,
    image: johanPic,
  },
};

// #5755ff
