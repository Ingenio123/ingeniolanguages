import {HeaderHero} from './HeaderHero'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState } from 'react';

export const Profile =  ()=>{
    const {idTeacher} = useParams()
    const [Data, setData] = useState({})
    
    

    useEffect( ()=>{
        const getData = ()=>{
            axios.get(`http://localhost:4000/data/teacher/${idTeacher}`).then(res=>  setData(res.data.teacher)  ) 
        }
        getData()
    },[])

    return(
        <>
            <HeaderHero data={Data} />
        </>
    );
}