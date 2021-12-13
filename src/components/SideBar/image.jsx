// import  UseImage  from '../../hooks/useImage'
import { useContext } from "react";
import { isAuth } from "../../helpers/Auth";
//context
import { ImageContex } from "../../context/imageContext";
const ImageComponent = (props) => {
  const { ImgUrl } = useContext(ImageContex);
  return <img src={!ImgUrl ? isAuth().picture : ImgUrl} alt="imge user" />;
};

export default ImageComponent;
//{isAuth() ? isAuth().picture : ""}
// src="https://res.cloudinary.com/ingenio/image/upload/v1639409069/xa6wrnjzdist0ud6d2ul.jpg"
