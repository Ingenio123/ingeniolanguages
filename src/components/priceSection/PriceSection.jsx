
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../assets/components/SectionPrices.css';
import {Dropdown} from './Dropdown.jsx'

export const PriceSection = ()=>{
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
            {/* <section className="mt-4">
                <div id="cursos" className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022_960_720.jpg" alt="" className="card-img-top"/>
                                <div className="card-body text-center">
                                    <span className="h2">$</span><span className="display-1 align-middle ">9</span>
                                    <p className="Promo">Promo</p>
                                    <p className="card-text description-cards">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Btnbuy>Buy Now</Btnbuy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="container" id="/Prices">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center" >
                            <div className="image_card_top"> </div>
                                <Dropdown />              
                            <button className=" price btn btn-primary m-auto ">PROCEED TO PAYMENT $60</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}