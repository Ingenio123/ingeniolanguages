import React from "react";
import styled from "styled-components";
const NavBanner = ({ element }) => {
  return (
    <Content ref={element}>
      <div>
        <Text>
          Get your lessons package today with 15% discount | CODE:
          MOTHERSDAY2022
        </Text>
      </div>
    </Content>
  );
};
export { NavBanner };

const Content = styled.div`
  width: 100%;
  height: 45px;
  position: sticky;
  color: #ffff;
  /* border: 1px solid #000; */
  background-color: #314584;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 50%;
  }
`;

const Text = styled.p`
  font-size: 0.9rem;
  /* line-height: normal; */
  color: #fff;
  margin: 0;
  font-family: "Helvetica";
  text-align: center;
`;
