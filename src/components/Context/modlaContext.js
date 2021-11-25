import { createContext, useState } from "react";

const ContextModal = createContext({});
export default ContextModal;

export function ModalContextProvider({ children }) {
  const [ModalState, setModalState] = useState(false);

  return (
    <ContextModal.Provider
      value={{
        ModalState,
        setModalState,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
}
