import styled from 'styled-components'
import ingenio  from  '../../assets/images/IngenioLanguages.svg';
import {Link as LinkFooter } from 'react-scroll';

export const Footer = () => {
    return (
        <>
            <SectionFooter>
               <Container>
                    <ImgLogo src={ingenio} alt="Ingenio Languages" />
                    <Items>
                        <SubItems to='home'      offset={50}  duration={1000}  smooth={true} >Home</SubItems>
                        <SubItems to='/Teachers' offset={50}  duration={1000}  smooth={true} >Teachers</SubItems>
                        <SubItems to='/Prices'   offset={50}  duration={1000}  smooth={true} >Prices</SubItems>
                        <SubItems to='' >Contac Us</SubItems>
                    </Items>
                    <CopyRight> Copyright © 2021 </CopyRight>
                    
               </Container>
               
            </SectionFooter>
            <TerminosCondiciones>
                        <PoliticaPriv>
                            <ItemsPoliticas>Contactos</ItemsPoliticas>
                            <TextPoliticas><b>Email: </b> contacto@ingenioonline.com</TextPoliticas> 
                            <TextPoliticas><b>Cell Phone:</b> (+593) 939418502 - (+593) 986635410</TextPoliticas> 
                            <TextPoliticas><b>Direccion: </b> Ecuador - Santo Domingo de los Tsachilas</TextPoliticas>
                            <br />
                            <br /> 
                            <TextPoliticas><b>Copyright © 2021</b></TextPoliticas> 
                        </PoliticaPriv>
                        <PoliticaPriv>
                            <ItemsPoliticas>Politicas  de privacidad</ItemsPoliticas>
                            <TextPoliticas>Ingenio Languages. Gestiona sus Datos de manera segura, Con responsabilidad de uso, mantenimiento y divulgacion de su informacion colectadas. Por ejemplo tipo de informacion que usted nos porpociona Nombres,Correo Electronico,Numero Telefonico.</TextPoliticas> 
                        </PoliticaPriv>
                        <PoliticaPriv>
                            <ItemsPoliticas>Terminos  y Condiciones</ItemsPoliticas>
                            <TextPoliticas3> <b>Terminos Comerciales:</b>  La tarifa por los servicios y cualquier otro cargo que pueda incurrir en relación con tu uso del servicio, como los impuestos y las posibles tarifas de transacción, se cobrarán instataneamente a tu método de pago</TextPoliticas3> 
                        </PoliticaPriv>
            </TerminosCondiciones>
            
        </>
    );
}


const TerminosCondiciones = styled.div `
    display: grid;
    grid-template-columns: repeat(3,1fr);
    
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1,1fr);
    }

    background-color: #314584;
    width: 100vw;
`
const PoliticaPriv = styled.div `
    
`
const ItemsPoliticas = styled.p `
    margin-top: 5px;
    color:white;
    text-align: center;
`
const TextPoliticas = styled.p `
    color:white;
    font-size:16px;
    text-align: justify;
    margin:0 15px;
`

const TextPoliticas3 = styled.p `
    color:white;
    font-size:16px;
    text-align: justify;
    margin-right: 40px;
`

const SectionFooter = styled.footer `
    display:flex;
    width: 100%;
    height:100vh;
    justify-content:center;
`
const Container = styled.div `
    margin: auto 0;
`
const ImgLogo =  styled.img `
    width:200px;
    height:100px;
`
const Items =  styled.ul `
    width:100%;
    padding:2rem 0;

`
const SubItems =  styled(LinkFooter) `
    display:block;
    list-style:none;
    padding:10px;
    font-size:25px;
    text-align:center;

    &::after{
        content: '';
        display:flex;
        margin: 0 auto;
        background:red;
        width:20px;
        height:3px;
    }
    &:hover {
        color:red !important;
        cursor:pointer;
    }
`

const CopyRight =  styled.span `
    display:flex;
    justify-content:center;
    text-align:center;
`