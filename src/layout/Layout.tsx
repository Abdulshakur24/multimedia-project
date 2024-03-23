import { useState } from "react";
import { Header, Footer } from "src/components";
import { Container, ResumeWrapper } from "./LayoutStyles";
import { FiExternalLink } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";

import resume from "src/assets/ashakur-resume.pdf";

export const Layout = ({ children }: { children: JSX.Element }) => {
  const [visited, setVisited] = useState(false);

  return (
    <Container>
      <Header />
      <main>
        {children}
        <AnimatePresence>
          {!visited && (
            <ResumeWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVisited(() => true)}
            >
              <a rel="noreferrer" href={resume} target="_blank">
                <FiExternalLink />
                <h6>Resume</h6>
              </a>
            </ResumeWrapper>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </Container>
  );
};
