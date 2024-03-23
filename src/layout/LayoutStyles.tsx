import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const ResumeWrapper = styled(motion.div)`
  position: fixed;
  max-width: 1280px;
  margin: 0 auto;
  inset: auto 1rem 1rem 1rem;
  display: flex;
  justify-content: flex-end;

  a {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;
