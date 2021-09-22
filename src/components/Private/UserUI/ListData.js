import {
  BiGridAlt,
  BiUser,
  BiBarChart,
  BiBook,
  BiLogOut,
  BiCog,
  BiCodeCurly,
  BiHomeAlt,
  BiCaretLeft,
} from "react-icons/bi";

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
    icon: <BiBarChart />,
    url: "/private",
    urlTeacher: "/teacherPage",
  },
  {
    item: "Temary",
    itemTeacher: "Calificacion",
    icon: <BiBook />,
    url: "/Temary",
    urlTeacher: "/",
  },
  {
    item: "Settings",
    icon: <BiCog />,
    url: "/settings",
    urlTeacher: "/",
  },
];
