import { info } from "src/personal/info";
import { useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { SectionText, SectionTitle } from "src/styles/GlobalComponents";
import Button from "src/styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (): JSX.Element => {
  const { scrollY } = useViewportScroll();
  const x = useTransform;
  const y = useTransform;
  const opacity = useTransform;

  return (
    <>
      <div style={{ gridArea: "1 / 1 / span 1 / span 2" }}>
        <LeftSection
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          style={{
            x: x(scrollY, [0, 1000], [0, -100]),
            y: y(scrollY, [0, 1000], [0, -10]),
            opacity: opacity(scrollY, [0, 500], [1, 0]),
          }}
        >
          <SectionTitle>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>{info.purpose}</SectionText>
          <Link to="contacts">
            <Button>Contact Me</Button>
          </Link>
        </LeftSection>
      </div>
    </>
  );
};

export default Hero;
