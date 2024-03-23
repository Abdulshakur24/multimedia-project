import { DiCssdeck } from "react-icons/di";
import { sociallinks } from "src/personal/info";
import { Link } from "react-scroll";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  ProgressBar,
} from "./HeaderStyles";
import { useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Header(): JSX.Element {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const x = useTransform;
  const y = useTransform;
  const opacity = useTransform;

  const [currentProgress, setCurrentProgress] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setCurrentProgress(scrollYProgress.get() * 100)
    );
  });

  return (
    <Container>
      <ProgressBar
        style={{
          width: `${currentProgress}%`,
        }}
      />
      <Div1
        initial={{ y: 0, x: -1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        style={{
          x: x(scrollY, [0, 100], [0, -100]),
          y: y(scrollY, [0, 100], [0, -10]),
          opacity: opacity(scrollY, [0, 40], [1, 0.3]),
        }}
      >
        <DiCssdeck size="3rem" />
        <p> Portfolio</p>
      </Div1>
      <Div2
        initial={{ y: 1000, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        style={{
          x: x(scrollY, [0, 100], [0, 0]),
          y: y(scrollY, [0, 100], [0, -100]),
          opacity: opacity(scrollY, [0, 40], [1, 0.3]),
        }}
      >
        <Link to="projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="tech">
          <NavLink>Technologies</NavLink>
        </Link>
        <Link to="about">
          <NavLink>About</NavLink>
        </Link>
      </Div2>
      <Div3
        initial={{ y: 0, x: 1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        style={{
          x: x(scrollY, [0, 100], [0, 100]),
          y: y(scrollY, [0, 100], [0, 0]),
          opacity: opacity(scrollY, [0, 40], [1, 0.3]),
        }}
      >
        {sociallinks.map(({ component }, index) => component(index))}
      </Div3>
    </Container>
  );
}

export default Header;
