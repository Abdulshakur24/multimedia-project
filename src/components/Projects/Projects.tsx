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
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedVideo } from "@cloudinary/react";
import { quality } from "@cloudinary/url-gen/actions/delivery";

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
        Our Projects
      </SectionTitle>
      <GridContainer>
        {projects.map(
          ({
            id,
            title,
            image,
            tags,
            description,
            visit,
            source,
            videoCode,
          }) => {
            return (
              <BlogCardComponent
                key={id}
                id={id}
                title={title}
                image={image}
                tags={tags}
                videoCode={videoCode}
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
  videoCode,
  visit,
  source,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  videoCode: string;
  source: string;
  visit: string;
  id: number;
}): JSX.Element {
  const [onHover, setOnHover] = useState(false);
  const [viewed, setViewed] = useState(false);

  const handleMouseEnter = () => {
    setOnHover(true);
    setViewed(true);
  };

  const handleMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <SlideInWhenVisible>
      <BlogCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="h-[224.89px] relative">
          {onHover ? (
            <Video image={image} videoCode={videoCode} />
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
          <ExternalLinks target="_blank" href={visit}>
            Visit
          </ExternalLinks>
          <ExternalLinks target="_blank" href={source}>
            Source
          </ExternalLinks>
        </UtilityList>
      </BlogCard>
    </SlideInWhenVisible>
  );
}

const cld = new Cloudinary({
  cloud: {
    cloudName: "dabxjpjk8",
  },
});

function Video({ videoCode, image }: { videoCode: string; image: string }) {
  return (
    <AdvancedVideo
      controls
      loop
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
      muted={false}
      playsInline
      preload={image}
      cldVid={cld.video(videoCode).delivery(quality("auto:best"))}
    />
  );
}

export default Projects;
