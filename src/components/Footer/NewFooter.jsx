import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewFooter() {
  return (
    <FooterBottom>
      <ContentFooterBottom className="container">
        <div>Copyright © 2021</div>
        <ContentLinks>
          <HiperVinculo to="/politicasPrivacidad">
            Politicas de privacidad
          </HiperVinculo>
          <HiperVinculo to="/TerminosCondiciones">
            Términos & Condiciones
          </HiperVinculo>
          <HiperVinculo
            to={{
              pathname: "https://forms.gle/z3wtdBtqmXtY8N9t8",
            }}
            target="_blank"
          >
            Suggestion And Coments
          </HiperVinculo>
        </ContentLinks>
        <ListIcons>
          <ItemIcon>
            <LinkIcon
              to="*"
              onClick={(e) => {
                window.location = "mailto:languages@ingenioonline.com";
                e.preventDefault();
              }}
            >
              <HiOutlineMail />
            </LinkIcon>
          </ItemIcon>
          <ItemIcon>
            <LinkIcon
              to={{
                pathname:
                  "https://www.facebook.com/ingeniolanguages/?ref=pages_you_manage",
              }}
              target="_blank"
            >
              <FaFacebookSquare />
            </LinkIcon>
          </ItemIcon>
          <ItemIcon>
            <LinkIcon
              to={{
                pathname: "https://www.instagram.com/ingeniolanguages/?hl=es",
              }}
              target="_blank"
            >
              <FaInstagram />
            </LinkIcon>
          </ItemIcon>
          <ItemIcon>
            <LinkIcon
              to={{
                pathname:
                  "https://www.linkedin.com/company/ingeniolanguages/mycompany/",
              }}
              target="_blank"
            >
              <FaLinkedin />
            </LinkIcon>
          </ItemIcon>
          <ItemIcon>
            <LinkIcon
              to={{
                pathname:
                  "https://api.whatsapp.com/send?phone=593998546897&text=hola,%20qué%20tal",
              }}
              target="_blank"
            >
              <FaWhatsapp />
            </LinkIcon>
          </ItemIcon>
        </ListIcons>
      </ContentFooterBottom>
    </FooterBottom>
  );
}
const FooterBottom = styled.div`
  background-color: #2b3d72;
  width: 100%;
  height: 21vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 25vh;
  }
  /* border-top: 1px solid #2b3d7263; */
`;

const ContentFooterBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: white;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const ListIcons = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
  column-gap: 1rem;
`;
const ItemIcon = styled.li`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
const LinkIcon = styled(Link)`
  color: #fff;
  :hover {
    color: #ff3838 !important;
  }
  :focus {
    color: #fff;
  }
  :active {
    color: #fff;
  }
`;

const ContentLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HiperVinculo = styled(Link)`
  color: #fff;
  :hover {
    color: #ff3838 !important;
  }
  :focus {
    color: #fff;
  }
  :active {
    color: #fff;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;
