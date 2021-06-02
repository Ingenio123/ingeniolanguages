import {HeaderHero} from './HeaderHero'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState} from 'react';
import { SectionTeachers } from './SectionTeachers';

export const Profile =  ()=>{
    

    const {idTeacher} = useParams()
    const [Data, setData] = useState([])


    const getData = ()=>{
        axios.get(`https://www.ingenioapi.com/data/teacher/${idTeacher}`)
        .then(res=>  setData(res.data.teacher)  ) 
    }

    useEffect( ()=>{
        getData()
    },[idTeacher])


   
    return(
        <>
      
            <HeaderHero data={Data} />
            <SectionTeachers />
        </>
    );
}