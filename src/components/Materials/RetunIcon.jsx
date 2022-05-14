import { IoLogoYoutube, IoDocumentText } from "react-icons/io5"; // logo de Youtobe
import { FaFilePowerpoint } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
export const Icon = ({ type_icon, font_size }) => {
  return (
    <>
      {type_icon === "Video" && <IoLogoYoutube fontSize={font_size} />}{" "}
      {type_icon === "Document" || type_icon === "Homework" ? (
        <IoDocumentText fontSize={font_size} />
      ) : null}
      {type_icon === "Slide" && <FaFilePowerpoint fontSize={font_size} />}
      {type_icon === "Quiz" && <MdQuiz fontSize={font_size} />}
    </>
  );
};
