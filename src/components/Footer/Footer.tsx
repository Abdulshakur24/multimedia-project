import { contacts, sociallinks } from "src/personal/info";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="contacts">
      <LinkList>
        <LinkColumn
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: -100, y: 0 },
          }}
        >
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:${contacts.tel}`}>{contacts.tel}</LinkItem>
        </LinkColumn>
        <LinkColumn
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: -100, y: 0 },
          }}
        >
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${contacts.email}`}>
            {contacts.email}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: -100, y: 0 },
          }}
        >
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: 100, y: 0 },
          }}
        >
          {sociallinks.map(({ component }, index) => component(index))}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
