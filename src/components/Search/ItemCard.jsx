import styled from "styled-components";

export default function ItemCard(props) {
  const { FirstName, email } = props.data;
  const handleClickItemStudent = (data) => {
    props.courseContext.setcourse(data);
  };
  return (
    <ItemList>
      {FirstName ||
        (email && (
          <Item onClick={() => handleClickItemStudent(props.data)}>
            {FirstName || email}
          </Item>
        ))}
    </ItemList>
  );
}

const ItemList = styled.div`
  padding: 0.2rem 0.5rem;
  color: #1a1a1a;
`;
const Item = styled.p`
  font-size: 1rem;
  margin: 0;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
