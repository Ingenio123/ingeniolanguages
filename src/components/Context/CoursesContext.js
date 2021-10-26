import { createContext, useState } from "react";

const ContextCourses = createContext();

function ProviderCourses({ children }) {
  const [course, setcourse] = useState(undefined);

  return (
    <ContextCourses.Provider value={{ course, setcourse }}>
      {children}
    </ContextCourses.Provider>
  );
}
export { ProviderCourses };
export default ContextCourses;
