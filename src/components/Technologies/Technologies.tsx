import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { technologies } from "src/personal/info";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "src/styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const motionOptions: {
  initial: string;
  whileInView: string;
  viewport: {
    once: boolean;
  };
  transition: {
    duration: number;
    delay: number;
  };
  variants: {
    visible: {
      opacity: number;
      x: number;
      y: number;
    };
    hidden: {
      opacity: number;
      x: number;
      y: number;
    };
  };
} = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5, delay: 0.15 },
  variants: {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: 0, y: -100 },
  },
};

function Technologies(): JSX.Element {
  return (
    <Section id="tech">
      <SectionDivider
        initial="hidden"
        whileInView="visible"
        viewport={motionOptions.viewport}
        transition={motionOptions.transition}
        variants={motionOptions.variants}
      />
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        viewport={motionOptions.viewport}
        transition={motionOptions.transition}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 0, y: -50 },
        }}
      >
        Technologies
      </SectionTitle>
      <SectionText
        initial="hidden"
        whileInView="visible"
        viewport={motionOptions.viewport}
        transition={motionOptions.transition}
        variants={motionOptions.variants}
      >
        {technologies.title}
      </SectionText>
      <List>
        <ListItem
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: -100, y: 0 },
          }}
        >
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph
              dangerouslySetInnerHTML={{ __html: technologies.frontEnd }}
            />
          </ListContainer>
        </ListItem>
        <ListItem
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: 0, y: -100 },
          }}
        >
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph
              dangerouslySetInnerHTML={{ __html: technologies.backEnd }}
            />
          </ListContainer>
        </ListItem>
        <ListItem
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: 100, y: 0 },
          }}
        >
          <picture>
            <DiZend size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph
              dangerouslySetInnerHTML={{ __html: technologies.uiOrux }}
            />
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: -100, y: 0 },
        }}
      />
    </Section>
  );
}

export default Technologies;
