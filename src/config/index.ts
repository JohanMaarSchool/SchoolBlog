import type { SiteConfig, SiteContent } from "../types";
import smallImage from "../smallJohan.jpeg";
import johanPic from "../JohanMeerLinkedinFotoEdited.png"
import droneImg from "../dronev0.8.jpeg"
import botImg from "../theFutureBot.jpeg"


export const SITE_CONFIG: SiteConfig = {
  title: "Johan Edward — Innovative Developer",
  author: "Johan Edward",
  description:
    "Innovative Developer based in Delft, always looking to innovate!",
  lang: "en",
  siteLogo: smallImage,
  navLinks: [
    { text: "Blog", href: "/SchoolBlog/#Blog" },
    { text: "Projects", href: "/SchoolBlog/#projects" },
    { text: "About", href: "/SchoolBlog/#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/johan-edward/" },
    { text: "Github", href: "https://github.com/JohanMaarSchool" },
    { text: "Youtube", href: "https://www.youtube.com/@johanmaarschool7165" },
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
      company: "Exact",
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
      linkSource: "/SchoolBlog/posts/Big5",
      image: "https://images.pexels.com/photos/16023/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "The colortest of Caluwe",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkSource: "/SchoolBlog/posts/Caluwe",
      image: "https://images.pexels.com/photos/163822/color-umbrella-red-yellow-163822.jpeg?auto=compress&cs=tinysrgb&w=700&h=750&dpr=1",
    },
    {
      name: "Personal Leadership",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkSource: "/SchoolBlog/posts/Leadership",
      image: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Circle of Concern & Circle of Influence",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkSource: "/SchoolBlog/posts/Circles",
      image: "https://images.pexels.com/photos/861464/pexels-photo-861464.jpeg?auto=compress&cs=tinysrgb&w=800&h=750&dpr=1",
    },
  ],
  projects: [
    {
      name: "Drone Delivery Group",
      quote: "\"It's a leap of fate. That's all it is. A leap of fate.\"",
      summary: "But building an AI-drone that can deliver packages had some unexpected challenges!",
      linkSource: "/SchoolBlog/posts/DroneDeliveryGroup",
      image: droneImg,
    },
    {
      name: "ALERS ~ The Hague University of applied sciences",
      quote: "\"Artificial intelligence is not just about efficiency gains, it’s about opening up new possibilities, unlocking human potential and solving some of society’s biggest challenges.\" ~ Yoshua Bengio",
      summary: "",
      linkSource: "/SchoolBlog/posts/Alers",
      image: botImg,
    },
    {
      name: "Self Driving Challenge ~ RDW",
      quote: "\"The only real mistake is the one from which we learn nothing.\"~ Henry Ford",
      summary: "Everytime I think about this project, it gives me a headache.",
      linkSource: "/SchoolBlog/posts/SDC",
      image: "https://www.selfdrivingchallenge.nl/uploads/overview-1024/32da6685-5f23-5434-90ad-b91bc015f6f6/3439047436/Afbeelding1.jpg",
    },
    {
      name: "Voetbal IT ~ Blue Paper",
      summary: "React Native is not React, but I enjoyed it!",
      linkSource: "/SchoolBlog/posts/VoetbalIT",
      image: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "FlightGate ~ Rotterdam The Hague Airport",
      summary: "A journey between four different airports and a perspective to change the status quo.",
      linkSource: "/SchoolBlog/posts/Flightgate",
      image: "https://live.staticflickr.com/8531/8629107032_a8d95d9850_b.jpg",
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
