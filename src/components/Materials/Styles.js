import styled from "styled-components";

export const ListIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
`;
export const Container = styled.main`
  margin: 0 auto;
  max-width: 1200px;
`;
export const ContentIcons = styled.div``;
export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
  color: #1d4ed8;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  line-height: normal;
  letter-spacing: -1px;
`;
export const DropDownsStyle = styled.div`
  width: 60px;
  color: #71717a;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  justify-content: space-between;
  /* border: 1px solid black; */
  :hover {
    color: #27272a !important;
  }
`;
export const TextH3 = styled.h3`
  border-bottom: 1px solid silver;
`;
export const TextSpan = styled.span`
  font-size: 1.2rem;
  line-height: normal;
`;
export const Divider = styled.hr`
  margin: 0;
  margin: 1rem 0;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-family: "Sacramento", cursive;
  text-align: center;
  font-weight: 600;
`;

export const BoxTextMaterials = styled.div`
  padding: 1rem;
  background-color: #e4e4e7;
  border-radius: 0.5rem;
  p {
    line-height: normal;
  }
`;
