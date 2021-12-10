import styled from "styled-components";
import { BiCamera, BiX } from "react-icons/bi";
//hooks
import { useRef, useEffect, useState } from "react";

//component
import CardEdit from "./EditComponent";
import ItemsComponent from "./CardItemContent";
import SalirComponent from "./SalirComponent";

const CardRigth = (props) => {
  // state
  const [ImgPrev, setImgPrev] = useState();
  const [preview, setPreview] = useState();
  //end state
  //refs
  const hiddenFileInput = useRef();
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    // const data = new FormData();
    // data.append("photo", event.target.files[0]);
    // data.append("name", "Test Name");
    // data.append("desc", "Test description");
    // const fileUploaded = event.target.files[0];
    setImgPrev(event.target.files[0]);
    // const formData = new FormData();
    // formData.append("File", fileUploaded);
    // console.log(fileUploaded);
    // console.log(data);
    // props.handleFile(fileUploaded);
  };

  useEffect(() => {
    if (ImgPrev) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, [ImgPrev]);

  return (
    <Card ref={props.cardRef}>
      <BtnClose onClick={() => props.clickCard()} />
      <ContentImg onClick={handleClick}>
        <img src={preview ? preview : props.picture} alt="images" />
        <CardImgProfile>
          <IconCamera />
          <Text>change picture</Text>
        </CardImgProfile>
        <input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
      </ContentImg>
      <CardEdit />
      <ItemsComponent
        clickCard={props.clickCard}
        clikcRedirect={props.clickRedirect}
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
  width: 25%;
  z-index: 99;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  background-color: #fff;
  border: 1px solid #d4d4d8;
  transition: all 0.5s ease;
  border-radius: 4px;
  transform: translate(100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
