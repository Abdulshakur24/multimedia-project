import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ProgressBar = styled(motion.div)`
  position: fixed;
  height: 4px;
  inset: 0 0 auto 0;
  background: linear-gradient(
    121.57deg,
    #ffffff 8.77%,
    rgba(255, 255, 255, 0.66) 100%
  );
  z-index: 500;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 2.5px;
  }
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  align-items: center;
  padding: 32px 48px 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1rem;
  }
`;

export const Div1 = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  svg {
    min-width: 3rem;
  }

  p {
    line-height: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled(motion.div)`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 2 / 6;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const Div3 = styled(motion.div)`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled(motion.p)`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const ContactDropDown = styled(motion.button)`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

export const SocialIcons = styled.a`
  transition: 250ms ease;
  color: white;
  border-radius: 100%;

  &:nth-child(even) {
    margin: 0 1rem;
  }

  &:hover {
    transform: scale(1.15);
    cursor: pointer;
  }
`;
