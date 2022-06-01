import { useState } from "react";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import stundetContext from "../Context/StudentContext";
import useUser from "../../hooks/useUser";

const ContentNaList = ({ data, student, toggle }) => {
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
          {item.idiom.length > 0 ? (
            <TextBox onClick={() => handleDropDown(index)}>
              <div>
                <SidebarLabel>{item.name}</SidebarLabel>
              </div>
              {item.idiom.length > 0 && <IconChevron />}
            </TextBox>
          ) : (
            <TextLinkItem onClick={toggle} to={"/"}>
              <div>
                <SidebarLabel>{item.name}</SidebarLabel>
              </div>
            </TextLinkItem>
          )}

          {IndexDropDown === index && (
            <>
              <SubNav>
                {/* {JSON.stringify(student)} */}
                {student !== null &&
                  student.QueryStudent.courses.map((itemcourse) => (
                    <>
                      {item.name == "My progress" && (
                        <ListItemSubNav>
                          <TextSubNav
                            onClick={toggle}
                            to={`/progress/${itemcourse._id}`}
                          >
                            {itemcourse.idiom} {itemcourse.kids && "kids"}
                          </TextSubNav>
                        </ListItemSubNav>
                      )}
                      {item.name == "My learning plan" && (
                        <ListItemSubNav>
                          <TextSubNav
                            onClick={toggle}
                            to={`/private/${itemcourse._id}`}
                          >
                            {itemcourse.idiom} {itemcourse.kids && "kids"}
                          </TextSubNav>
                        </ListItemSubNav>
                      )}
                      {item.name == "Book my lessons" && (
                        <ListItemSubNav>
                          <TextSubNav
                            onClick={toggle}
                            to={`/booklesson?language=${itemcourse.idiom}`}
                          >
                            {itemcourse.idiom} {itemcourse.kids && "kids"}
                          </TextSubNav>
                        </ListItemSubNav>
                      )}
                    </>
                  ))}
                {!student && (
                  <>
                    {item.idiom.map((itemtwo) => (
                      <>
                        {item.name == "My progress" && (
                          <ListItemSubNav>
                            <TextSubNav
                              onClick={toggle}
                              to={`/progress/${itemtwo.idiomN}`}
                            >
                              {itemtwo.idiomN}
                            </TextSubNav>
                          </ListItemSubNav>
                        )}
                        {item.name == "My learning plan" && (
                          <ListItemSubNav>
                            <TextSubNav
                              onClick={toggle}
                              to={`/private/${itemtwo.idiomN}`}
                            >
                              {itemtwo.idiomN}
                            </TextSubNav>
                          </ListItemSubNav>
                        )}

                        {item.name == "Book my lessons" && (
                          <ListItemSubNav>
                            <TextSubNav
                              onClick={toggle}
                              to={`/booklesson?language=${itemtwo.idiomN}`}
                            >
                              {itemtwo.idiomN}
                            </TextSubNav>
                          </ListItemSubNav>
                        )}
                      </>
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
    name: "My learning plan",
    idiom: [
      {
        idiomN: "English",
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
      {
        idiomN: "Russian",
      },
      {
        idiomN: "Korean",
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
      {
        idiomN: "Russian",
      },
      {
        idiomN: "Korean",
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
      {
        idiomN: "Russian",
      },
      {
        idiomN: "Korean",
      },
    ],
  },
];
export const SideDrawer = ({ toggle, open }) => {
  const { logout } = useUser();
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
              <ContentNaList
                data={items}
                student={studentContext.student}
                toggle={toggle}
              />
            </ContentNav>
            <ContentNav>
              <ListItem>
                <BoxText>
                  <TextLinkItem onClick={toggle} to="/updateinformation">
                    Update Information
                  </TextLinkItem>
                </BoxText>
              </ListItem>
              <ListItem>
                <BoxText>
                  <Text onClick={logout}>Sign Out</Text>
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
  display: block;

  width: 100%;
  /* border: 1px solid yellow; */
`;
const IconChevron = styled(IoChevronForwardOutline)`
  font-size: 1.5rem;
  border-radius: 50%;
  float: right;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.2rem;
  border-radius: 4px;

  :hover {
    background-color: #ff646e;
  }
  :focus {
    color: #fff !important;
  }
`;
const SidebarLabel = styled.span``;
const TextBox = styled.div`
  ${TextStyleItem};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.2rem;
  border-radius: 4px;
`;
