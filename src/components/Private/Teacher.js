import axios from 'axios';
import { isAuth, getCookie } from '../../helpers/Auth';
import { useEffect, useState } from 'react'
import SearchStudent from './TeacherComponents/SearchStudent'
import {Temary} from '../Private/UserUI/Temary/Temary'
import styled from 'styled-components'
export const Teacher = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        picture: ''
    });

    const [search, setSearch] = useState(null)
    const token = getCookie('token');

    const loadPagage = async () => {

        axios.get(`https://www.ingenioapi.com/teacherAccount/${isAuth()._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                const { username, email, picture } = res.data;
                setFormData({ ...formData, name: username, email, picture })
            })
            .catch(err => console.log(`err ${err}`))
    }
    
    const handleSearch = (data) => {
        setSearch(data);
    }

    
    useEffect(() => {
        // loadPagage();
    }, [])
    

    return (
        <>
            <Grid className="container">
                <Temary UseTeacher={true}  />
                <SearchStudent handleSearch={handleSearch} />
            </Grid>

            <h2>Is the Teacher {formData.name}  </h2>
            <div className="dflex">

            </div>
        </>
    )
}

const Grid  = styled.div`
    display:grid;
    grid-template-columns: 60% 40% ;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`