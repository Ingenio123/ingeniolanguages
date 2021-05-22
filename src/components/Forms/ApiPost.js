import axios from 'axios'

export const sendDataUser = async (data)=>{
    
    const res = await axios.post('http://localhost:4000/data',{
        email:data.email,
        password:data.password
    })
    console.log(res);
}