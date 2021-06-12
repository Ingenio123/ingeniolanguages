import axios from 'axios';
import {getCookie,isAuth} from '../../helpers/Auth'
import {useState,useEffect} from 'react'
const PrivateRoute = ({history})=>{
    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });
   
    const token = getCookie('token');
    
    useEffect(() => {
        loadProfile()
    }, [])

    const loadProfile = ()=>{
        axios.get(`https://www.ingenioapi.com/data/user/${isAuth()._id}`,{
        headers:{
            Authorization: `Beares ${token}`
        }
        }).then(res=>{
            const {username,email} = res.data;
            setFormData({...formData, name:username,email})
        })
        .catch((err)=> console.log('Existe un Error', err))
    }
   
    const clickme = ()=>{
        history.push('/');
    }
    return (
        <>
            <header className="container hero">
                <button onClick={clickme} >home</button>
            </header>
        </>
    )

}

export default PrivateRoute;

