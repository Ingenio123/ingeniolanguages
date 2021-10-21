import { BiBook, BiCog, BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
export const Items = [
  {
    item: "Home",
    itemTeacher: "Home",
    icon: <BiHomeAlt />,
    url: "/",
    urlTeacher: "/",
  },
  {
    item: "My Class",
    itemTeacher: "Nada",
    icon: <BiBook />,
    url: "/private",
    urlTeacher: "/teacherPage",
  },
  {
    item: "Me data",
    itemTeacher: "Nada",
    icon: <AiOutlineUser />,
    url: "/me",
    urlTeacher: "/teacherPage",
  },

  {
    item: "Settings",
    icon: <BiCog />,
    url: "/settings",
    urlTeacher: "/",
  },
];
