import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  display: grid;
  grid-template: minmax(auto, 500px) / 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 32px 48px 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  @media ${(props: any) => props.theme.breakpoints.sm} {
    grid-template: minmax(auto, 300px) / 1fr 1fr;
    padding: 1rem;
  }
`;

export const Section = styled(motion.section)`
  display: ${(props: any) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props: any) => (props.row ? "row" : "column")};
  padding: ${(props: any) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props: any) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    padding: ${(props: any) => (props.nopadding ? "0" : "16px 16px 0")};

    /* width: calc(100vw - 32px); */
    flex-direction: column;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-weight: 800;
  font-size: ${(props: any) => (props.main ? "65px" : "48px")};
  line-height: ${(props: any) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props: any) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props: any) => props.theme.breakpoints.md} {
    font-size: 48px;
    line-height: 40px;
    margin-bottom: 12px;
    padding: ${(props: any) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props: any) => (props.main ? "28px" : "32px")};
    line-height: ${(props: any) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props: any) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled(motion.p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props: any) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionDivider = styled(motion.div)`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props: any) =>
    props.coloralt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

  margin: ${(props: any) => (props.divider ? "4rem 0" : "")};
  @media ${(props: any) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
export const SectionSubText = styled(motion.p)`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props: any) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled(motion.button)`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props: any) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled(motion.div)`
  width: ${({ alt }: { alt: any }) => (alt ? "150px" : "262px")};
  height: ${({ alt }: { alt: any }) => (alt ? "52px" : "64px")};
  font-size: ${({ alt }: { alt: any }) => (alt ? "20px" : "24px")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  --edge-size: 1em;
  clip-path: polygon(
    var(--edge-size) 0%,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(100% - var(--edge-size)) 100%,
    0 100%,
    0% var(--edge-size)
  );
  margin: ${({ alt, form }: any) => (alt || form ? "0" : "0 0 80px")};
  color: #fff;
  background: ${({ alt }: { alt: any }) =>
    alt
      ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
      : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }: any) => (disabled ? ".5" : "1")};

  @media ${(props: any) => props.theme.breakpoints.md} {
    width: ${({ alt }: { alt: any }) => (alt ? "150px" : "184px")};
    height: ${({ alt }: { alt: any }) => (alt ? "52px" : "48px")};
    font-size: ${({ alt }: { alt: any }) => (alt ? "20px" : "16px")};
    margin-bottom: ${({ alt }: { alt: any }) => (alt ? "0" : "64px")};
    --edge-size: 0.75em;
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    --edge-size: 0.5em;
    margin-bottom: ${({ alt }: { alt: any }) => (alt ? "0" : "32px")};
  }
`;

export const ButtonFront = styled(motion.button)`
  border: none;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  --edge-size: 0.5em;
  clip-path: polygon(
    var(--edge-size) 0%,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(100% - var(--edge-size)) 100%,
    0 100%,
    0% var(--edge-size)
  );
  background: ${({ alt }: { alt: any }) =>
    alt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  font-size: ${({ alt }: { alt: any }) => (alt ? "20px" : "24px")};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
      : "none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props: any) => props.theme.breakpoints.md} {
    font-size: ${({ alt }: { alt: any }) => (alt ? "20px" : "16px")};
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const LinkContainer = styled(motion.div)`
  margin-left: ${({ large }: any) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props: any) => props.theme.breakpoints.md} {
    margin-left: ${({ large }: any) => (large ? "16px" : "8px")};
  }
  @media ${(props: any) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }: any) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }: any) => (large ? "32px" : "24px")};

  @media ${(props: any) => props.theme.breakpoints.md} {
    height: ${({ nav }: any) => (nav ? "16px" : "24px")};
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    height: ${({ large }: any) => (large ? "32px" : "16px")};
  }
`;
