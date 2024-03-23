import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../personal/info";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactPlayer from "react-player";

function SlideInWhenVisible({ children }: { children: JSX.Element }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Projects(): JSX.Element {
  return (
    <Section id="projects">
      <SectionDivider
        initial={{ y: 0, x: -1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      <SectionTitle
        initial={{ y: 0, x: -1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Personal Projects
      </SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, title, image, tags, description, visit, source, preview }) => {
            return (
              <BlogCardComponent
                key={id}
                id={id}
                title={title}
                image={image}
                preview={preview}
                tags={tags}
                description={description}
                visit={visit}
                source={source}
              />
            );
          }
        )}
      </GridContainer>
    </Section>
  );
}

function BlogCardComponent({
  title,
  image,
  tags,
  description,
  preview,
  visit,
  source,
}: {
  title: string;
  description: string;
  image: string;
  preview?: string;
  tags: string[];
  source: string;
  visit: string;
  id: number;
}): JSX.Element {
  const [onHover, setOnHover] = useState(false);
  const [viewed, setViewed] = useState(false);

  return (
    <SlideInWhenVisible>
      <BlogCard
        onMouseEnter={() => {
          setOnHover(true);
          setViewed(true);
        }}
        onMouseLeave={() => {
          setOnHover(false);
        }}
      >
        <div className="h-[224.89px] relative">
          {onHover ? (
            <ReactPlayer
              url={preview}
              playing={true}
              controls={true}
              loop={true}
              muted={false}
              width="100%"
              height="100%"
              playsinline={true}
            />
          ) : (
            <Img src={image} alt={title} />
          )}
          {!viewed && (
            <p className=" absolute -top-12 z-50 right-0 left-0 ml-auto mr-auto animate-wobble ">
              Hover Me!
            </p>
          )}
        </div>

        <TitleContent>
          <HeaderThree>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">{description}</CardInfo>
        <div>
          <TitleContent>Stack:</TitleContent>
          <TagList>
            {tags.map((t, index) => {
              return <Tag key={index}>{t}</Tag>;
            })}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={visit}>Visit</ExternalLinks>
          <ExternalLinks href={source}>Source</ExternalLinks>
        </UtilityList>
      </BlogCard>
    </SlideInWhenVisible>
  );
}

export default Projects;
