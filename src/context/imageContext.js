import { createContext, useEffect, useState } from "react";

const ImageContex = createContext();

const ContextProvider = (props) => {
  // HOOK STATE
  const [ImgUrl, setImgUrl] = useState(null);
  const [Loading, setLoading] = useState({
    error: false,
    message: "",
    loading: false,
  });
  const [state, setState] = useState(1);
  // HOOK EFFECT
  useEffect(() => {
    // peticion GET -> extraer la imagen de perfil del user  actualizado.
    console.log("useEffect context new img uri");
  }, [ImgUrl]);

  return (
    <ImageContex.Provider
      value={{
        ImgUrl,
        setImgUrl,
        setLoading,
        Loading,
        state,
        setState,
      }}
    >
      {props.children}
    </ImageContex.Provider>
  );
};
export default ContextProvider;
export { ImageContex };
