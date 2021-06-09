import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../assets/components/SectionPrices.css';
import {Dropdown} from './Dropdown.jsx'
import ImageEnglish from  '../../assets/images/EnglishImage.jpg';
import ImageFrench from  '../../assets/images/frenchImg.jpg';
import ImageSpain from  '../../assets/images/SpainImage.jpg';

export const PriceSection = ()=>{
    
    const [selected, setSelected] = useState("")

    const Data = [
        {
            title:'30 min lessons ',
            lesson: [{
                num:4,
            },
            {
                num:6,
            },
            {
                num:8,
            }],
            prices: [60,90,120]
        },
        {
            title:'45 min lessons',
            lesson: [{
                num:4,
            },
            {
                num:6,
            },
            {
                num:8,
            }],
            prices: [60,90,120]
        }]
        
        const [valor, setValor] = useState(0)

    return(
        <>
            <section className="container" >
                <div className="row" id="/Prices">
                    <div className="col-md-4">
                        <div className="card text-center" >
                        {/* <div className="image_card_top"> </div> */}
                        <Image src={ImageEnglish}  />
                                <Dropdown />              
                            <button className=" price btn btn-primary m-auto ">PROCEED TO PAYMENT $60</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" >
                        {/* <div className="image_card_top"> </div> */}
                        <Image src={ImageFrench}  />
                                <Dropdown />              
                            <button className=" price btn btn-primary m-auto ">PROCEED TO PAYMENT $60</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" >
                        {/* <div className="image_card_top"> </div> */}
                        <Image src={ImageSpain}  />
                                <Dropdown />              
                            <button className=" price btn btn-primary m-auto ">PROCEED TO PAYMENT $60</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const Btnbuy = styled(Link)`
    color:white;
    font-size:1rem;
    padding:5px 1.5rem;
    background:#FF3946;
    transition: .2s ease-in-out;
    &:hover{
        padding: 5px 2rem;
        transform: translate(-50%);
        color:white;
        font-size:1.2rem;
    }
`
const Image = styled.img `
    width:80%;
    height:180px;
    margin:0 auto;
`
