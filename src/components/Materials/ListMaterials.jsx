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
            <ToolTip>Document</ToolTip>
            <Text>Home work #1</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon
              to={{
                pathname: "https://www.google.com",
              }}
              target="_blank"
            >
              <FaFilePowerpoint fontSize={"3rem"} />
            </BoxIcon>
            <ToolTip>Slide</ToolTip>
            <Text>Countries & nationalitites</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon>
              <MdModeEdit fontSize={"3rem"} />
            </BoxIcon>
            <ToolTip>Homework</ToolTip>
            <Text>Verb to be</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon to="www.google.com" target="_blank">
              <MdQuiz fontSize={"3rem"} />
            </BoxIcon>
            <ToolTip>Quiz</ToolTip>
            <Text>Quiz</Text>
          </ContentIcons>
          <ContentIcons>
            <BoxIcon>
              <IoDocumentText fontSize={"3rem"} />
            </BoxIcon>
            <Text>Job & ocupations</Text>
            <ToolTip>Document</ToolTip>
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
