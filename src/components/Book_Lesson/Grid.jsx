import styled from "styled-components";
const Grid = ({ column, rows, width, children, column_gap, row_gap }) => (
  <ContentGrid
    column={column}
    width={width}
    column_gap={column_gap}
    row_gap={row_gap}
  >
    {children}
  </ContentGrid>
);
export default Grid;
const ContentGrid = styled.div`
  margin-top: 0.3rem;
  width: ${(props) => props.width};
  display: grid;
  grid-template-columns: ${(props) =>
    props.column ? `repeat(${props.column})` : `repeat(2,1fr)`};
  column-gap: ${(props) => props.column_gap};
  row-gap: ${(props) => props.row_gap};
`;
