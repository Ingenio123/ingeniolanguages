import { createContext, useState } from "react";

export const ContextModal = createContext({});

function ModalContextProvider({ children }) {
  const [EventModal, setEventModal] = useState(false);
  return (
    <ContextModal.Provider
      value={{
        EventModal,
        setEventModal,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
}

export { ModalContextProvider };
