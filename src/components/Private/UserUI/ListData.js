import { BiGridAlt,BiUser,BiBarChart,BiBook,BiLogOut,BiCog,BiCodeCurly,BiHomeAlt,BiCaretLeft} from "react-icons/bi";

const Items = [
    {
        item: 'Home',
        icon: <BiHomeAlt />,
        url: "/"
    },
    {
        item: 'My Class',
        icon:<BiBarChart />,
        url: '/private'
    },
    {
        item: "Temary",
        icon: <BiBook />,
        url: "Temary"
    },
    {
        item: "Settings",
        icon: <BiCog />,
        url: "/settings"
    },
]
export default Items;