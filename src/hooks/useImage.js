import { useContext, useCallback } from "react";
import { ImageContex } from "../context/imageContext";
import { UpdateImageProfile } from "../services/UserService";

const UseImage = () => {
  const { setImgUrl, setLoading, setState, Loading } = useContext(ImageContex);

  const uploadImage = useCallback(async ({ formData, id }) => {
    setLoading({ ...Loading, loading: true });
    setState(2);
    const responseService = await UpdateImageProfile({ formData, id });

    if (responseService.error) {
      return setLoading({
        ...Loading,
        loading: false,
        error: responseService.error,
        message: responseService.message,
      });
    }

    setLoading({
      ...Loading,
      loading: false,
      error: responseService.error,
      message: responseService.message,
    });
    setImgUrl(responseService.img);
  }, []);
  return {
    updateImage: uploadImage,
    Loading,
  };
};
export default UseImage;
