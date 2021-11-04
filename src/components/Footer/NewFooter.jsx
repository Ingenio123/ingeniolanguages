import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
export default function NewFooter() {
  return (
    <FooterBottom>
      <ContentFooterBottom className="container">
        <div>Copyright © 2021</div>
        <ListIcons>
          <ItemIcon>
            <HiOutlineMail />
          </ItemIcon>
          <ItemIcon>
            <AiFillPhone />
          </ItemIcon>
          <ItemIcon>
            <FaLinkedin />
          </ItemIcon>
          <ItemIcon>
            <FaInstagram />
          </ItemIcon>
          <ItemIcon>
            <FaFacebookSquare />
          </ItemIcon>
        </ListIcons>
      </ContentFooterBottom>
    </FooterBottom>
  );
}
const FooterBottom = styled.div`
  background-color: #2b3d72;
  width: 100%;
  /* border-top: 1px solid #2b3d7263; */
`;

const ContentFooterBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: white;
  justify-content: space-between;
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
