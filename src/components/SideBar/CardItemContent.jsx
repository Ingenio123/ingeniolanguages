import styled, { css } from "styled-components";
import { BiBook, BiPieChart } from "react-icons/bi";
import PropTypes, { string } from "prop-types";

const CardItemcontent = (props) => {
  return (
    <CardItems>
      <Items
        onClick={() => {
          props.clikcRedirect(props.urlfirst);
          props.clickCard();
        }}
      >
        <Text>{props.firstText}</Text>
        <IconCourse />
      </Items>
      <Items
        onClick={() => {
          props.clikcRedirect(props.urlSecond);
          props.clickCard();
        }}
      >
        <Text>{props.secondText}</Text>
        <IconProgress />
      </Items>
    </CardItems>
  );
};
CardItemcontent.defaultProps = {
  urlfirst: "/private",
  urlSecond: "/progress",
  firstText: "Course content",
  secondText: "My progress",
};

CardItemcontent.prototype = {
  urlfirst: PropTypes.string,
  urlSecond: PropTypes.string,
  firstText: PropTypes.string,
  secondText: PropTypes.string,
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
