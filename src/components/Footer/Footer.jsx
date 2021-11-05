import styled from "styled-components";
import ingenio from "../../assets/images/IngenioLanguages.svg";
import { Link as LinkFooter } from "react-scroll";
import { Link } from "react-router-dom";
import FooterBottom from "./NewFooter";

export const Footer = () => {
  return (
    <>
      <SectionFooter>
        <Container>
          <ImgLogo src={ingenio} alt="Ingenio Languages" />
          <Items>
            <SubItems to="home" offset={50} duration={1000} smooth={true}>
              Home
            </SubItems>
            <SubItems to="/Teachers" offset={50} duration={1000} smooth={true}>
              Teachers
            </SubItems>
            <SubItems to="Prices" offset={50} duration={1000} smooth={true}>
              Prices
            </SubItems>
            <SubItems to="">Contac Us</SubItems>
          </Items>
        </Container>
      </SectionFooter>
      {/* <TerminosCondiciones>
        <PoliticaPriv>
          <ItemsPoliticas>Contactos</ItemsPoliticas>
          <TextPoliticas>
            <b>Email: </b> contacto@ingenioonline.com
          </TextPoliticas>
          <TextPoliticas>
            <b>Cell Phone:</b> (+593) 939418502 - (+593) 986635410
          </TextPoliticas>
          <TextPoliticas>
            <b>Direccion: </b> Ecuador - Santo Domingo de los Tsachilas
          </TextPoliticas>
          <TextPoliticas>
            <HiperVinculo
              to={{
                pathname: "https://forms.gle/z3wtdBtqmXtY8N9t8",
              }}
              target="_blank"
            >
              Suggestion And Coments
            </HiperVinculo>
          </TextPoliticas>
          <br />
          <br />
          <TextPoliticas></TextPoliticas>
        </PoliticaPriv>

        <BoxCenter>
          <HiperVinculo to="/politicasPrivacidad">
            Politicas de privacidad
          </HiperVinculo>
        </BoxCenter>

        <BoxCenter>
          <HiperVinculo to="/TerminosCondiciones">
            Terminos y condiciones
          </HiperVinculo>
        </BoxCenter>
      </TerminosCondiciones> */}
      <FooterBottom />
    </>
  );
};

const BoxCenter = styled.div`
  display: flex;
  flex-direction: column;
`;

const TerminosCondiciones = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  background-color: #314584;
  width: 100vw;
`;
const PoliticaPriv = styled.div``;
const ItemsPoliticas = styled.p`
  color: white;
  text-align: center;
`;
const TextPoliticas = styled.p`
  color: white;
  font-size: 16px;
  text-align: justify;
  margin: 0 15px;
`;

const TextPoliticas3 = styled.p`
  color: white;
  font-size: 16px;
  text-align: justify;
  margin-right: 40px;
`;

const SectionFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
`;
const Container = styled.div`
  margin: 0 auto;
`;
const ImgLogo = styled.img`
  width: 200px;
  height: 100px;
`;
const Items = styled.ul`
  width: 100%;
  padding: 2rem 0;
`;
const SubItems = styled(LinkFooter)`
  display: block;
  list-style: none;
  padding: 10px;
  font-size: 25px;
  text-align: center;

  &::after {
    content: "";
    display: flex;
    margin: 0 auto;
    background: red;
    width: 20px;
    height: 3px;
  }
  &:hover {
    color: red !important;
    cursor: pointer;
  }
`;

const CopyRight = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const HiperVinculo = styled(Link)`
  color: #fff;
  align-self: center;
  line-height: 0;
  margin-top: 1rem;
  margin-bottom: 2rem;
  :hover {
    color: #ff3946 !important;
  }
  :focus {
    color: #ff3946 !important;
  }
`;
