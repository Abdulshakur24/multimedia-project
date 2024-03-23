import {
  Accomplishments,
  BackgroundAnimation,
  Hero,
  Projects,
  Technologies,
  TimeLine,
} from "./components";
import { Layout } from "./layout/Layout";
import { HeroSection } from "./styles/GlobalComponents";

function App(): JSX.Element {
  return (
    <Layout>
      <>
        <HeroSection>
          <Hero />
          <BackgroundAnimation />
        </HeroSection>
        <Projects />
        <Technologies />
        <TimeLine />
        <Accomplishments />
      </>
    </Layout>
  );
}

export default App;
