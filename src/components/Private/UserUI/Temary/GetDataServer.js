import axios from 'axios';
import Url from '../../../Urls'

export const GetDataTemary = async () =>{
    const Enpoint  =  'https://www.ingenioapi.com/temary/getTemary'
    
    const res = await axios.get(Enpoint)
    console.log(res.data.temary);
    return res.data.temary;
}