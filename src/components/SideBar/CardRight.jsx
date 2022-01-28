import styled from "styled-components";
import { BiCamera, BiX } from "react-icons/bi";
//hooks
import { useRef, useEffect, useState, useCallback, useContext } from "react";
// custom hooks
import useImageProfile from "../../hooks/useImage";

//component
import CardEdit from "./EditComponent";
import ItemsComponent from "./CardItemContent";
import SalirComponent from "./SalirComponent";
import ButtonSend from "./ButtonSendComponent";
// librerias
// services
//context
import { ImageContex } from "../../context/imageContext";
import studentContext from "../../components/Context/StudentContext";
//end context

const CardRigth = (props) => {
  // state
  const [ImgPrev, setImgPrev] = useState();
  const [preview, setPreview] = useState();
  const [stateImg, setStateImg] = useState("");
  const [Stado, setStado] = useState(1);
  //end state
  // context
  const { state, setState } = useContext(ImageContex);
  const { student } = useContext(studentContext);
  // end context
  //refs
  const hiddenFileInput = useRef();
  //
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    setImgPrev(event.target.files[0]);
  };
  // hooks
  const { updateImage } = useImageProfile();
  //
  useEffect(() => {
    setState(1);
    if (ImgPrev) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(ImgPrev);
    } else {
      setPreview(null);
    }
  }, [ImgPrev]);
  //
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", ImgPrev);

    await updateImage({
      formData,
      id: "614602dbc1432533bc008c23",
    });
  };

  return (
    <Card ref={props.cardRef}>
      <BtnClose onClick={() => props.clickCard()} />
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        <ContentImg onClick={handleClick}>
          <img src={preview ? preview : props.picture} alt="images" />
          <CardImgProfile>
            <IconCamera />
            <Text>change picture</Text>
          </CardImgProfile>
        </ContentImg>
        <input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
          name="image"
          style={{ display: "none" }}
        />
        {/* {preview && <ButtonSend newimg={stateImg} estado={state} />} */}
        <ButtonSend newimg={stateImg} estado={state} />
      </form>
      <CardEdit />
      <ItemsComponent
        clickCard={props.clickCard}
        clikcRedirect={props.clickRedirect}
        firstText={student === null ? "Home" : "Course content"}
        secondText={student === null ? "Student's Feedback" : "My progress"}
        urlfirst={student === null ? "/" : "/private"}
        urlSecond={student === null ? "/teacherPage" : "/progress"}
      />
      <SalirComponent logout={props.logout} clickCard={props.clickCard} />
    </Card>
  );
};

export default CardRigth;

const Card = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 345.605px;
  height: 368px;
  z-index: 99;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d4d4d8;
  border-radius: 0.375rem;
  transition: all 0.5s ease;
  border-radius: 4px;
  transform: translate(100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const ContentImg = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.3);\
  margin: 0 0 1rem 0;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CardImgProfile = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    color: #d4d4d8;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #3f3f46;
`;

const Text = styled.span`
  width: 50%;
  line-height: normal;
  font-size: 1rem;
`;
const IconCamera = styled(BiCamera)`
  font-size: 2.5rem;
`;
const BtnClose = styled(BiX)`
  font-size: 1.85rem;
  position: absolute;
  top: 5px;
  left: 5px;
  color: #71717a;
  :hover {
    cursor: pointer;
  }
`;
