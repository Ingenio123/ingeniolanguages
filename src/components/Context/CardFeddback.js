import { createContext, useState } from "react";

const ContextCardFeedBack = createContext();

function ProviderCardFedBack({ children }) {
  return (
    <ContextCardFeedBack.Provider value={{}}>
      {children}
    </ContextCardFeedBack.Provider>
  );
}
