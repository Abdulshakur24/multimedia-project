import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "src/components/Header/HeaderStyles";
import {
  aboutMeProps,
  achievementsProps,
  contactsProps,
  infoProps,
  projectsProps,
  socialLinksProps,
  technologiesProps,
  timeLineDataProps,
} from "src/types/default";

export const info: infoProps = {
  purpose:
    "I am a self-taught MERN/PERN Stack developer, currently exploring some of the advanced/guru projects.",
};

export const projects: projectsProps = [
  {
    title: "TikTok Clone",
    description:
      "A social media that allows you to post videos, comments, and like a post with google authentication!",
    image: new URL("../assets/tiktok-clone.jpg", import.meta.url).href,
    preview: new URL("../assets/tiktok-clone.mp4", import.meta.url).href,
    tags: ["NextJS", "ReactJS", "SANITY", "Framer Motion"],
    source: "#",
    visit: "#",
    id: 1,
  },
  {
    title: "Real Estate (Emirates)",
    description:
      "A real estate site with third-party API (Bayut API). End-users are able to explore, search, and filter queries!",
    image: new URL("../assets/realtor.jpg", import.meta.url).href,
    preview: new URL("../assets/realtor.mp4", import.meta.url).href,
    tags: ["NextJS", "ReactJS", "Chakra UI", "Framer Motion"],
    source: "#",
    visit: "#",
    id: 2,
  },
  // {
  //   title: "BAG",
  //   description:
  //     "This project uses a third-party API called restcountries to fetch countries that allow users to explore and save any country to MongoDB.",
  //   image: new URL("../assets/bag.jpg", import.meta.url).href,
  //   tags: ["MongoDB", "ReactJS", "Express", "NodeJS", "Mantine UI"],
  //   source: "#",
  //   visit: "#",
  //   id: 3,
  // },
  {
    title: "Audiophile",
    description:
      "This is a multi-page website that focuses on audio gear. It is made with PostgresSQL for the backend and can easily be scaled for more products.",
    image: new URL("../assets/audiophile.jpg", import.meta.url).href,
    preview: new URL("../assets/audiophile.mp4", import.meta.url).href,
    tags: ["ReactJS", "PostgreSQL", "NodeJS", "Express", "Passport JS"],
    source: "#",
    visit: "#",
    id: 4,
  },
  {
    title: "Space Tourism",
    description:
      "This is a challenging front-end project from Front-end Mentor. I was provided with Figma designs to transform them into a fully functional website.",
    image: new URL("../assets/space-tourism.jpg", import.meta.url).href,
    preview: new URL("../assets/space-tourism.mp4", import.meta.url).href,
    tags: ["ReactJS", "Styled components", "Framer motion"],
    source: "#",
    visit: "#",
    id: 5,
  },
  // {
  //   title: "Reddit Client",
  //   description:
  //     "Reddit is a read-only web app client for Reddit Smooth reading experience on web browser.",
  //   image: new URL("../assets/reddit.jpg", import.meta.url).href,
  //   tags: ["ReactJS", "React Redux"],
  //   source: "#",
  //   visit: "#",
  //   id: 6,
  // },
];

export const TimeLineData: timeLineDataProps = [
  { year: 2019, text: "Began my front-end development journey." },
  { year: 2020, text: "Expanded my skills towards full-stack development." },
  { year: 2021, text: "Embarked on ambitious project development." },
  { year: 2022, text: "Set goals for freelance or remote work opportunities." },
  { year: 2023, text: "Returned to university for further education." },
  { year: 2024, text: "Continuing academic studies." },
];

export const sociallinks: socialLinksProps = [
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://github.com/Abdulshakur24"
        target={"_blank"}
      >
        <AiFillGithub size="2.5rem" />
      </SocialIcons>
    ),
  },
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://www.linkedin.com/in/abdulshakur-abubakar-96b846219/"
        target={"_blank"}
      >
        <AiFillLinkedin size="2.5rem" />
      </SocialIcons>
    ),
  },
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://twitter.com/Ashakur_js24"
        target={"_blank"}
      >
        <AiOutlineTwitter size="2.5rem" />
      </SocialIcons>
    ),
  },
];

export const technologies: technologiesProps = {
  title:
    "I have worked with a range of technologies in the web development world, from Front-end to Full-stack engineering.",
  frontEnd: "Experience with <br/> CRA, NextJS, and Laravel.",
  backEnd:
    "Experience with Node, Express <br/> and Databases(PostgresSQL, MongoDB).",
  uiOrux: "Basic knowledge in <br/> tools like Figma.",
};

export const aboutMe: aboutMeProps = {
  title:
    "My name is Abdulshakur; I love all things about front-end design/development and am looking for a job to take my passion to the next level!",
};

export const achievements: achievementsProps = [
  { number: 50, text: "Repositories" },
];

export const contacts: contactsProps = {
  tel: "+254 707049885",
  email: "ashakur.js24@gmail.com",
};
