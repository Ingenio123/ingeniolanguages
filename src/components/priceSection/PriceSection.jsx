
import styled from 'styled-components';
import '../../assets/components/SectionPrices.css';
import {Dropdown} from './DropDown'
import { IoIosLock } from "react-icons/io";

export const PriceSection = ()=>{
    
    return(
        <>
            <section className="container" >
                <div className="row" id="/Prices">
                    <div className="col-md-4">
                        <div className="card" >
                        <div className="image_card english "> <h4 className="text-center">English</h4> </div>
                            <Dropdown />
                            <ButtonPrices>PROCCED  TO  PAYMENT $60</ButtonPrices>
                            <Security> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg> PAGOS TOTALMENTE SEGUROS </Security> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" >
                        <div className="image_card france "> <h4 className="text-center">French </h4> </div>
                            <Dropdown />
                            <ButtonPrices>PROCCED  TO  PAYMENT $60</ButtonPrices>
                            <Security> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg> PAGOS TOTALMENTE SEGUROS </Security>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" >
                        
                        <div className="image_card spanish "> <h4 className="text-center">Spanish</h4> </div>
                                <Dropdown />              
                                <ButtonPrices>PROCCED  TO  PAYMENT $60 </ButtonPrices>
                                <Security> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg> <span>PAGOS TOTALMENTE SEGUROS</span> </Security>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const ButtonPrices  =  styled.button `
    background: #314584;
    color:#fff;
    border:none;
    width:60%;
    margin:10px auto;
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
