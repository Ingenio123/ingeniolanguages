import axios from 'axios';
export const dataArray = [];

const getData = async()=>{
    const res = await axios.get('https://www.ingenioapi.com/data/getAllFlags')
    dataArray.push(res.data);
}  