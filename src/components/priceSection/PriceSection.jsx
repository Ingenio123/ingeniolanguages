import { useState } from 'react';
import styled from 'styled-components';
import '../../assets/components/SectionPrices.css';
import {FaTrashAlt} from 'react-icons/fa'
import ModalPackage from '../modalsPackage/modalPackage'
import ModalPackageFrench from '../modalsPackage/ModalPackageFrench';
import ModalPackageSpanish from '../modalsPackage/ModalPackageSpanish';


export const PriceSection = ()=>{

    const [ShowModal, setShowModal] = useState(false)
    const [ShowModalFrench, setShowModalFrench] = useState(false)
    const [ShowModalSpanish, setShowModalSpanish] = useState(false)

    const OpenModal = () =>{
        setShowModal(prev => !prev)
    }
    
    const OpenModalFrench = ()=>{
        setShowModalFrench(prev => !prev);
    }
    const OpenModalSpanish = ()=>{
        setShowModalSpanish(prev => !prev);
    }

   
    return(
        <>
            <section className="container" >
                <div className="row" id="/Prices">
                    
                    <div className="col-md-4">
                        <div className="" >
                        <div className="image_card english"   onClick={ OpenModal } > <h4 className="text-center">English</h4> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="" >
                        <div className="image_card france"   onClick={ OpenModalFrench } > <h4 className="text-center">French </h4> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="" >
                        <div className="image_card spanish" onClick={ OpenModalSpanish } > <h4  className="text-center">Spanish</h4> </div> 
                        </div>
                    </div>
                </div>
            </section>

            <ModalPackage    ShowModal={ShowModal} setShowModal={setShowModal}  />
            <ModalPackageFrench ShowModalFrench={ShowModalFrench} setShowModalFrench={setShowModalFrench}  />
            <ModalPackageSpanish ShowModalSpanish={ShowModalSpanish} setShowModalSpanish={setShowModalSpanish}  />
        </>
    );
}

const ButtonPrices  =  styled.button `
    background: #314584;
    color:#fff;
    border:none;
    border-radius:4px;
    line-height:1.2;
    padding:10px 12px;
    font-size:16px;
    &:hover{
        background: rgba(49,69,132,.9)
    }
`
const  Security = styled.div `
    margin:0 auto;
    padding:10px;
    line-height:none;
`

const PartBotonPay = styled.div `
    width:100%;
    display:flex;
    justify-content:flex-end;
    margin-bottom:20px;
    position:relative;
`

const ButtonPay = styled.button  `
    border:none;
    border-radius: 40px;
    padding:4px 10px;
    font-size:18px;
    background: #314584;
    color:white;
    width:100px;
    margin-right:15px;
    position:relative;
    margin-right:30px;
`
const ItemsCart = styled.div `
    position:absolute;
    width:25px;
    height:25px;
    border-radius:50%;
    background:#ff3946;
    z-index:2;
    right:20px;
    top:-10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:18px;
    font-weight:700;
    color:white;
    box-shadow:0px 0px 8px 6px rgba(0,0,0,0.08);
    margin-right:10px;
`
const Delete  = styled.button `
    background:#F8646D;
    border:none;
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    font-size:16px;
    line-height: 1.2;
    transition:all .2s ease-out;
    &:hover {
        background: #FF3946;
    }
`
const Box_Buttons =  styled.div `
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin-top:10px;
`

const IconTrash =  styled(FaTrashAlt) `
`
const BoxPackageLesson = styled.div `
    display:flex;
    align-items:center;
    width:80%;
    background: rgba(68,189,50,.3);
    margin:0 auto;
    padding:6px 8px;
    margin-top:5px;
    border-radius:5px; 
    p{  
        color:#314584;
        text-align: justify !important;
        vertical-align:middle !important;
        word-spacing:-1.9px !important;
        line-height:.9;
        letter-spacing:0px;
        padding:0;
        font-size:20px;
        margin-bottom:0px;
    }
`