import styled from 'styled-components'
import ingenio  from  '../../assets/images/IngenioLanguages.svg'
export const Footer = () => {
    return (
        <>
            <SectionFooter>
               <Container>
                    <ImgLogo src={ingenio} />
                    <Items>
                        <SubItems>Home</SubItems>
                        <SubItems>Teachers</SubItems>
                        <SubItems>Prices</SubItems>
                        <SubItems>Contac Us</SubItems>
                    </Items>
                    <CopyRight> Copyright © 2021 </CopyRight>
               </Container>
            </SectionFooter>
        </>
    );
}

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
const SubItems =  styled.li `
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
`
const CopyRight =  styled.span `
    display:flex;
    justify-content:center;
    text-align:center;
`