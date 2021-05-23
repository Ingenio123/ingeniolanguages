import {HeaderHero} from './HeaderHero'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState} from 'react';

export const Profile =  ()=>{
    

    const {idTeacher} = useParams()
    const [Data, setData] = useState([])


    const getData = ()=>{
        axios.get(`http://ingenioapi.com/data/teacher/60a97544f8add948a8b793da`)
        .then(res=>  setData(res.data.teacher)  ) 
    }

    useEffect( ()=>{
        getData()
    },[idTeacher])


   
    return(
        <>
      
            <HeaderHero data={Data} />
        </>
    );
}