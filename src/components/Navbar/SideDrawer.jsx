import { useState } from "react";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import stundetContext from "../Context/StudentContext";

const ContentNaList = ({ data, student }) => {
  const [IndexDropDown, setDropDown] = useState(null);
  const handleDropDown = (key) => {
    if (key === IndexDropDown) {
      return setDropDown(null);
    }
    setDropDown(key);
  };
  return (
    <>
      {data.map((item, index) => (
        <ListItem key={index}>
          <BoxText>
            {item.name === "Home" ? (
              <TextLinkItem to="/">{item.name}</TextLinkItem>
            ) : (
              <Text>{item.name}</Text>
            )}

            {item.idiom.length > 0 && (
              <IconChevron onClick={() => handleDropDown(index)} />
            )}
          </BoxText>
          {IndexDropDown == index && (
            <>
              <SubNav>
                {/* {JSON.stringify(student)} */}
                {student !== null &&
                  student.QueryStudent.courses.map((itemcourse) => (
                    <ListItemSubNav>
                      <TextSubNav to={`/private/${itemcourse._id}`}>
                        {itemcourse.idiom} {itemcourse.kids && "kids"}
                      </TextSubNav>
                    </ListItemSubNav>
                  ))}
                {!student && (
                  <>
                    {item.idiom.map((itemtwo) => (
                      <ListItemSubNav>
                        <TextSubNav to={`/private/${itemtwo.idiomN}`}>
                          {itemtwo.idiomN}
                        </TextSubNav>
                      </ListItemSubNav>
                    ))}
                  </>
                )}
              </SubNav>
            </>
          )}
        </ListItem>
      ))}
    </>
  );
};

const items = [
  { name: "Home", idiom: [] },
  {
    name: "My learnin plan",
    idiom: [
      {
        idiomN: "English ",
      },
      {
        idiomN: "Spanish",
      },
      {
        idiomN: "French",
      },
      {
        idiomN: "German",
      },
    ],
  },
  {
    name: "My progress",
    idiom: [
      {
        idiomN: "English ",
      },
      {
        idiomN: "Spanish",
      },
      {
        idiomN: "French",
      },
      {
        idiomN: "German",
      },
    ],
  },
  {
    name: "Book my lessons",
    idiom: [
      {
        idiomN: "English ",
      },
      {
        idiomN: "Spanish",
      },
      {
        idiomN: "French",
      },
      {
        idiomN: "German",
      },
    ],
  },
];
export const SideDrawer = ({ toggle, open }) => {
  const studentContext = useContext(stundetContext);
  return (
    <>
      {open && (
        <Drawer>
          <Content>
            <Icon onClick={toggle}>
              <IconClose />
            </Icon>
            <ContentNav>
              <ContentNaList data={items} student={studentContext.student} />
            </ContentNav>
            <ContentNav>
              <ListItem>
                <BoxText>
                  <Text>Log out</Text>
                </BoxText>
              </ListItem>
            </ContentNav>
          </Content>
        </Drawer>
      )}
    </>
  );
};

const Drawer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ff3946;
  height: 100vh;
  z-index: 9999;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid yellow; */
  padding: 0 2rem;
`;

const Icon = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    position: absolute;
    top: 1.2rem;
    right: 0.5rem;
    font-size: 2rem;
    outline: none;
    color: #fff;
  }
`;
const IconClose = styled(FaTimes)`
  color: #ffff;
`;
const ContentNav = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 0.75rem;
  margin: 0;
  margin-bottom: 1rem;
  transition: 0.3s;
  /* border: 1px solid green; */
`;
const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextStyleItem = css`
  font-size: 1.2rem;
  border-radius: 4px;
  color: #fff;
`;

const Text = styled.span`
  ${TextStyleItem};
  display: inline-block;

  /* border: 1px solid yellow; */
`;
const IconChevron = styled(IoChevronForwardOutline)`
  font-size: 1.5rem;

  border-radius: 50%;
  :hover {
    background-color: #ff646e;
  }
`;

const SubNav = styled.ul`
  /* border: 1px solid yellow; */
  display: block;
  width: 100%;
  margin-left: 1rem;
`;

const ListItemSubNav = styled.li`
  padding: 0.3rem;
`;
const TextSubNav = styled(Link)`
  font-size: 1rem;
  color: #fff;
  font-size: 1rem;
  display: block;
  padding: 0.5rem 0.2rem;
  border-radius: 4px;
  /* border: 1px solid yellow; */
  :hover {
    background-color: #ff646e;
  }
  :focus {
    color: #fff !important;
  }
`;
const TextLinkItem = styled(Link)`
  ${TextStyleItem};
  display: block;
  padding: 0.5rem 0.2rem;
  border-radius: 4px;
  :hover {
    background-color: #ff646e;
  }
  :focus {
    color: #fff !important;
  }
`;
