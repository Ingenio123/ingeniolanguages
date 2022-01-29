import { useContext, useCallback } from "react";
import { ImageContex } from "../context/imageContext";
import { UpdateImageProfile } from "../services/UserService";

const UseImage = () => {
  const { setImgUrl, setLoading, setState, Loading } = useContext(ImageContex);

  const uploadImage = useCallback(async ({ formData, id }) => {
    setLoading({ ...Loading, loading: true });
    setState(2);
    const urlImage = await UpdateImageProfile({ formData, id });
    setLoading({
      ...Loading,
      loading: false,
      error: urlImage.error,
      message: urlImage.message,
    });
    setImgUrl(urlImage.img);

    setTimeout(() => {
      setState(4);
    }, [2000]);
  }, []);
  return {
    updateImage: uploadImage,
    // getImage: getImage,
  };
};
export default UseImage;
