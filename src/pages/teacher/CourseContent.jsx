import Dropdown from "react-multilevel-dropdown";
import { LanguageRegular } from "./Langanguage";
import styled from "styled-components";
import { useState } from "react";
import { Temary } from "./TemaryForTeacher";
const CourseContent = () => {
  const [val, setVal] = useState(null);
  return (
    <div className="container">
      <ContenFlex>
        <CardDropdown>
          <Dropdown
            buttonVariant="primary"
            title="Click here to select a language "
            position="right"
            style={{ fontSize: "1rem" }}
          >
            <Dropdown.Item>
              Regular
              <Dropdown.Submenu position="right">
                {LanguageRegular.map((i, key) => {
                  return (
                    <DropDownItem
                      key={key}
                      onClick={() => setVal(`${i.language}`)}
                    >
                      {" "}
                      {i.language}{" "}
                    </DropDownItem>
                  );
                })}
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
              Kids
              <Dropdown.Submenu position="right">
                {LanguageRegular.map((i, key) => {
                  return (
                    <DropDownItem
                      key={key}
                      onClick={() => setVal(`${i.language} (kids)`)}
                    >
                      {i.language}
                    </DropDownItem>
                  );
                })}
              </Dropdown.Submenu>
            </Dropdown.Item>
          </Dropdown>
        </CardDropdown>
        <ContentTemary>{val && <Temary language={val} />}</ContentTemary>
      </ContenFlex>
    </div>
  );
};
export default CourseContent;

const CardDropdown = styled.div`
  margin-top: 2rem;
`;
const DropDownItem = styled(Dropdown.Item)`
  font-size: 1rem;
  font-weight: 600;
`;

const ContenFlex = styled.main`
  display: flex;
  justify-content: space-between;
`;
const ContentTemary = styled.div`
  width: 600px;
  /* border: 1px solid red; */
`;
