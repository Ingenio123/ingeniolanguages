import styled from 'styled-components';
import {BiCheck}  from 'react-icons/bi'
export const ModalSucess = ({goBackF}) => {
    return (
        <ContainerModal>
            <Card>
               <ContentIco>
                    <BiCheck />
               </ContentIco>
               <ContentText>
               <Title>Success</Title>
               <Description>
               Your free demo lesson has been requested. We will soon get in touch with you to arrange the time and date for the lesson.
               </Description>
               </ContentText>
               <Button onClick={goBackF}>Go back!</Button>
            </Card>
        </ContainerModal>
    )
}


const  ContainerModal = styled.main`
    position:fixed;
    width:100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 999;
    background-color: rgba(0,0,0,.3) ;
`


const Card = styled.div`
    width: 450px;
    height: 300px;
    background-color: #fff;
    color:#3F3F46;
    border-radius: 4px;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    flex-direction:column ;
`

const ContentIco  = styled.div`
    width: 40px;
    height: 40px;
    background-color:#86EFAC;
    font-size:1.8rem;
    border-radius: 50%;
    display:flex;
    justify-content:center ;
    align-items:center ;
`

const ContentText = styled.div`
    width:100%;
    padding: 1rem;
    
`

const Title = styled.span`
    display:block;
    font-size:1.3rem;
    font-weight:600 ;
    letter-spacing:-1px;

    text-align:center;
`

const Description  = styled.p`
    font-size:1rem;
    line-height: normal;
    text-align:center;
    margin: 0;
    margin-top: .4rem;
`


const Button = styled.button`
    background-color:#18181B;
    color:#fff;
    border:none;
    padding:.8rem 1rem;
    min-width: 200px;
    border-radius: 4px;
    font-size:1rem;
    line-height: normal;
    :hover{
        background-color:#27272A;
    }
`

