import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import IngeioIcoSvg from "../../assets/images/svgs/IngeioIcoSvg.svg";

export default function Index({ children }) {
  return (
    <ContentModal>
      <ContentForms>
        <ContentFormsLogo>
          <img src={IngeioIcoSvg} alt="Logo ingenio languages" />
        </ContentFormsLogo>
        <ContentFormsText>
          <h5>Complete with the rest of your information</h5>
          <p>We will need them to contact you about your free demo class</p>
        </ContentFormsText>
        <ContentFormstFormulario>{children}</ContentFormstFormulario>
        <ContentFormsAvisoLegal>
          <TextLink
            to={{
              pathname: "/TerminosCondiciones",
            }}
            target="_blank"
          >
            Terms and conditions
          </TextLink>
          <TextLink
            to={{
              pathname: "/politicasPrivacidad",
            }}
            target="_blank"
          >
            Privacy policies
          </TextLink>
        </ContentFormsAvisoLegal>
      </ContentForms>
      <ContentPresentations></ContentPresentations>
    </ContentModal>
  );
}

const Mb = css`
  margin-bottom: 1rem;
`;
const TextBold = css`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0a071b;
  line-height: 1;
`;
const ContentModal = styled.main`
  margin: 2.5rem auto;
  position: relative;
  max-width: 960px;
  width: 100%;
  height: 450px;
  display: grid;
  grid-template-columns: 50% 50%;

  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: -1px 2px 9px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -1px 2px 9px 0px rgba(0, 0, 0, 0.3);
`;
const ContentForms = styled.div`
  position: relative;
  margin: 2rem 0 2rem 2rem;
  display: flex;
  flex-direction: column;
`;
const ContentFormsLogo = styled.div`
  max-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Mb};
  /* border: 2px solid #044983; */
`;

const ContentFormsText = styled.div`
  h5 {
    ${TextBold};
    ${Mb};
  }
  p {
    color: #87849a;
    line-height: 1;
    ${Mb};
  }
`;

const ContentFormstFormulario = styled.div`
  display: flex;
  margin: 0 2rem 0 0;
`;
const ContentFormsAvisoLegal = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  column-gap: 1rem;
  transition: all 0.3s ease;
`;
const ContentPresentations = styled.div`
  background-image: url("https://image.freepik.com/foto-gratis/estudiante-clase-mirando-curso_23-2148888810.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;
const TextLink = styled(Link)`
  color: #87849a;
  font-size: 0.9rem;
  letter-spacing: 0px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #4d4d4d !important;
  }
`;
