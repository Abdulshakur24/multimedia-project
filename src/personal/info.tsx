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
    "Ashakur Services is dedicated to delivering cutting-edge technological solutions and consulting services to businesses worldwide. Our expertise spans from software development to strategic IT consulting.",
};

export const projects: projectsProps = [
  {
    title: "TikTok Clone",
    description:
      "Experience the thrill of short-form video with our TikTok Clone. Post, comment, and like with Google authentication, built on NextJS and ReactJS.",
    image: new URL("../assets/tiktok-clone.jpg", import.meta.url).href,
    tags: ["NextJS", "ReactJS", "SANITY", "Framer Motion"],
    videoCode: "tiktok-clone_bt7ood",
    source: "#",
    visit: "#",
    id: 1,
  },
  {
    title: "Real Estate (Emirates)",
    description:
      "Explore and filter properties on our Real Estate platform, integrated with Bayut API for a comprehensive search experience. Built with NextJS and ReactJS.",
    image: new URL("../assets/realtor.jpg", import.meta.url).href,
    tags: ["NextJS", "ReactJS", "Chakra UI", "Framer Motion"],
    videoCode: "realtor_bcuv0z",
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
      "Discover high-quality audio gear on our multi-page Audiophile website, scalable and backed with PostgreSQL. Developed using ReactJS and NodeJS.",
    image: new URL("../assets/audiophile.jpg", import.meta.url).href,
    tags: ["ReactJS", "PostgreSQL", "NodeJS", "Express", "Passport JS"],
    videoCode: "audiophile_pqmhnb",
    source: "#",
    visit: "#",
    id: 4,
  },
  {
    title: "Space Tourism",
    description:
      "Embark on a digital journey with our Space Tourism website, a project challenging front-end skills to bring Figma designs to life using ReactJS.",
    image: new URL("../assets/space-tourism.jpg", import.meta.url).href,
    tags: ["ReactJS", "Styled components", "Framer motion"],
    videoCode: "space-tourism_jvyyzh",
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
  {
    year: 2019,
    text: "Founded Ashakur Services, focusing on bespoke software development.",
  },
  {
    year: 2020,
    text: "Expanded our services to include IT consulting and strategy.",
  },
  {
    year: 2021,
    text: "Launched our proprietary CRM and e-commerce solutions.",
  },
  {
    year: 2022,
    text: "Gained recognition in the tech community through our tech blog.",
  },
  {
    year: 2023,
    text: "Continued to innovate with new projects and community involvement.",
  },
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
    "At Ashakur Services, we pride ourselves on our expertise with a wide range of technologies, from web development to software architecture.",
  frontEnd: "Proficient in ReactJS, NextJS, and modern JavaScript frameworks.",
  backEnd:
    "Skilled in Node.js, Express, and various databases like MongoDB and PostgreSQL.",
  uiOrux:
    "We also have a keen eye for UI/UX design, ensuring a seamless user experience.",
};

export const aboutMe: aboutMeProps = {
  title:
    "Ashakur Services is a tech firm dedicated to delivering innovative and valuable digital solutions, with a skilled team that transforms complex challenges into user-friendly outcomes.",
};

export const achievements: achievementsProps = [
  { number: 100, text: "Successful Projects Delivered" },
  { number: 50, text: "Satisfied Clients Globally" },
  { number: 20, text: "Industry Awards & Recognitions" },
];

export const contacts: contactsProps = {
  tel: "+254 707049885",
  email: "contact@ashakurservices.com",
};
