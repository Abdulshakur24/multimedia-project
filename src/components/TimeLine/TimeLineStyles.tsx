import styled from "styled-components";
import { motion } from "framer-motion";

export const CarouselContainer = styled(motion.ul)`
  max-width: 1040px;
  background: #0f1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
  gap: 1rem;

  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    padding: 0 500px 0 0;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;

export const CarouselMobileScrollNode = styled(motion.div)`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;

export const CarouselItem = styled(motion.div)`
  background-color: #212d45;
  max-width: 196px;
  padding: 1rem;
  --edge-size: 0.5em;
  clip-path: polygon(
    var(--edge-size) 0%,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(100% - var(--edge-size)) 100%,
    0 100%,
    0% var(--edge-size)
  );

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
  }
`;

export const CarouselItemTitle = styled(motion.h4)`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 40.15%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemImg = styled(motion.svg)`
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: 100%;
  position: absolute;
  inset: 1rem;
  transform: translateX(60px);

  @media ${(props) => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    overflow: visible;
    transform: translateX(40px);
  }
`;

export const CarouselItemText = styled(motion.p)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
