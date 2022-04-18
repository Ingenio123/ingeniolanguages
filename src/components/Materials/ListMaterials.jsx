import { IoLogoYoutube, IoDocumentText } from "react-icons/io5"; // logo de Youtobe
import { FaFilePowerpoint } from "react-icons/fa";
import { MdQuiz, MdModeEdit } from "react-icons/md";

import {
  ListIcons,
  ContentIcons,
  BoxIcon,
  Text,
  BoxTextMaterials,
  ToolTip,
} from "./Styles";

export const ListMaterials = ({ materials }) => {
  return (
    <>
      {materials ? (
        <ListIcons>
          <ContentIcons>
            <BoxIcon
              to={{
                pathname: "https://www.google.com",
              }}
              target="_blank"
            >
              <IoLogoYoutube fontSize={"3rem"} />
            </BoxIcon>
            <ToolTip>Video</ToolTip>
            <Text>numbers</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon>
              <IoDocumentText fontSize={"3rem"} />
            </BoxIcon>
            <Text>Home work #1</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon>
              <FaFilePowerpoint fontSize={"3rem"} />
            </BoxIcon>
            <Text>Countries & nationalitites</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon>
              <MdModeEdit fontSize={"3rem"} />
            </BoxIcon>
            <Text>Verb to be</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon to="www.google.com" target="_blank">
              <MdQuiz fontSize={"3rem"} />
            </BoxIcon>
            <Text>Quiz</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon>
              <IoDocumentText fontSize={"3rem"} />
            </BoxIcon>
            <Text>Job & ocupations</Text>
          </ContentIcons>
        </ListIcons>
      ) : (
        <BoxTextMaterials>
          <p>There aren't any materials yet.</p>
        </BoxTextMaterials>
      )}
    </>
  );
};
