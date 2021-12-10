import styled, { css } from "styled-components";
import { BiBook, BiPieChart } from "react-icons/bi";
const CardItemcontent = (props) => {
  return (
    <CardItems>
      <Items
        onClick={() => {
          props.clikcRedirect("/private");
          props.clickCard();
        }}
      >
        <Text>Course content</Text>
        <IconCourse />
      </Items>
      <Items
        onClick={() => {
          props.clikcRedirect("/progress");
          props.clickCard();
        }}
      >
        <Text>My progress</Text>
        <IconProgress />
      </Items>
    </CardItems>
  );
};

export default CardItemcontent;

const CardItems = styled.div`
  border-top: 2px solid silver;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: #71717a;
  :hover {
    cursor: pointer;
    color: #314584;
  }
`;

const CssIcon = css`
  font-size: 1.4rem;
`;

const IconCourse = styled(BiBook)`
  ${CssIcon}
`;
const IconProgress = styled(BiPieChart)`
  ${CssIcon}
`;

const Text = styled.span`
  font-size: 1.2rem;

  line-height: normal;
  letter-spacing: 0;
  font-weight: 600;
`;
