import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



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
    return(
        <>
            <section className="mt-4">
                <div id="cursos" className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div class="card">
                                <img src="https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022_960_720.jpg" alt="" class="card-img-top"/>
                                <div class="card-body text-center">
                                    <span class="h2">$</span><span class="display-1 align-middle ">9</span>
                                    <p class="Promo">Promo</p>
                                    <p class="card-text description-cards">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Btnbuy>Buy Now</Btnbuy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}