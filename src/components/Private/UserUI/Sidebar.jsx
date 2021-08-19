import { BiGridAlt,BiLogOut,BiCodeCurly,BiCaretLeft} from "react-icons/bi";
import './Sidebar.css';
import {useSelector,useDispatch} from 'react-redux'
import { useState,useEffect } from "react";
import {Logout} from '../../../redux/actions/authAction';
import {useHistory,Link} from 'react-router-dom';
import {useGoogleLogin} from 'react-use-googlelogin'
import {isAuth,getCookie} from '../../../helpers/Auth'
import Items from './ListData';
import Url from '../../Urls';
import axios from 'axios'

export default function Sidebar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [Active, setActive] = useState('')

    // states
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);

    const { signOut } = useGoogleLogin({
        clientId: '669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com',
    })

    const logout = () => {
        signOut()
        dispatch(Logout())
        history.push('/');  
    }
    const itemActive = (index) =>{
        setActive(index)
    }

    useEffect(()=>{
        var user = window.localStorage.getItem('user')

        if(user){
            var data = JSON.parse(user)
            GetUser(data)
        }
        document.body.classList.add('body-mod');
        const element = document.getElementById('home');
        if(element){
             element.style.display = "none";
        }

    },[])

    const token = getCookie('token');

    async function GetUser(data){
        var Enpoint = Url.url + '/data/user/' + data._id;
        const res = await axios.get(Enpoint,{
            headers:{Authorization: `Bearer ${data.token}`}
        })
        if(res){
            return res;
        }else{
            return history.push('/');
        }
    }
    return (
        <div>
        <header className="header" id="header">
            <div className="header__toggle">
                <i id="header-toggle"> <BiCodeCurly/> </i>
            </div>
            <div class="header__img">
                <img src={ isAuth()  ? isAuth().picture : ''} alt="" />
            </div>
        </header>
        <div >

            <div  className={sidebar? 'l-navbar show' :'l-navbar'} id="nav-bar">
                <nav className="nav">
                    <div>
                        <a  className="nav__logo" onClick={showSidebar}>
                            <i className=' nav__logo-icon'> {sidebar ? <BiCaretLeft />:<BiGridAlt />  } </i>
                            <span className="nav__logo-name">Ingenio Languages</span>
                        </a>

                        <div className="nav__list">
                            {
                                Items.map((item,index)=>{
                                    return(
                                        <Link key={index} to={item.url} onClick={()=> itemActive(index) } >
                                            <a  className={Active == index ?'nav__link active':'nav__link'}  >
                                                <i className='nav__icon' >{item.icon}  </i>
                                                <span className="nav__name">{item.item}</span>
                                            </a>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <a  className="nav__link" onClick={logout}  >
                        <i className='nav__icon' > <BiLogOut/> </i>
                        <span className="nav__name">Log Out</span>
                    </a>
                </nav>
            </div>
        </div>
        </div>
    )
}