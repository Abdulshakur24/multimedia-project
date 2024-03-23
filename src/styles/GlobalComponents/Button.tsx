import { ReactNode } from "react";
import { ButtonBack, ButtonFront } from "./index";

// Make sure to define the type for all the props you expect, including 'alt'
type ButtonProps = {
  children: ReactNode;
  alt?: any; // Define the correct type instead of 'any' if possible
  disabled?: boolean;
  // ... include other props as needed
};

const Button = ({ children, alt, ...props }: ButtonProps) => (
  <ButtonBack alt={alt} {...props}>
    {children}
    <ButtonFront alt={alt} {...props}>
      {children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
