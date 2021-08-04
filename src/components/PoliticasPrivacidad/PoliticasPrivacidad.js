import styled from 'styled-components'
import {useRef,useEffect,useState} from 'react'
export default function PoliticasPrivacidad() {
    const ItroduccionRef = useRef();
    const [IntroducionContent, setIntroducion] = useState(false)
    useEffect(()=>{
       const handleScroll = ()=>{
        const introduccion = ItroduccionRef.current;
        const {y} = introduccion.getBoundingClientRect();
        const active = y <= 0 ? true:false;

        if(active) {
              
            setIntroducion(!IntroducionContent)
            console.log(IntroducionContent)
        }

    }
    window.addEventListener('scroll',handleScroll);

    return () => {
        window.removeEventListener('scroll',handleScroll)
    }
    },[])


    return (
        <div className="container mt-5 ">
            <Wrapper>
                <Table>
                    <BoxSubTable>
                        <TitleTable>Content</TitleTable>
                        <TableItem activado={true} >Introduccion</TableItem>
                        <TableItem>Introduccion</TableItem>
                        <TableItem>Introduccion</TableItem>
                        <TableItem>Introduccion</TableItem>
                        <TableItem>Introduccion</TableItem>
                    </BoxSubTable>
                </Table>


                <Title>Política de privacidad</Title>
                <Content>
                <BoxContent>
                    <ItemsContent ref={ItroduccionRef} >Introduccion</ItemsContent>
                    <ItemsSubContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor consectetur aliquam repellat voluptatibus! Amet, odit. Tempora, ipsam, debitis minus ea nam error aliquam ab nemo corporis, perspiciatis autem. Facilis?
                    </ItemsSubContent>

                </BoxContent>
                <BoxContent>
                    <ItemsContent>Introduccion</ItemsContent>
                    <ItemsSubContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor consectetur aliquam repellat voluptatibus! Amet, odit. Tempora, ipsam, debitis minus ea nam error aliquam ab nemo corporis, perspiciatis autem. Facilis?
                    </ItemsSubContent>

                </BoxContent>
                <BoxContent>
                    <ItemsContent>Introduccion</ItemsContent>
                    <ItemsSubContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor consectetur aliquam repellat voluptatibus! Amet, odit. Tempora, ipsam, debitis minus ea nam error aliquam ab nemo corporis, perspiciatis autem. Facilis?
                    </ItemsSubContent>

                </BoxContent>
                <BoxContent>
                    <ItemsContent>Introduccion</ItemsContent>
                    <ItemsSubContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor consectetur aliquam repellat voluptatibus! Amet, odit. Tempora, ipsam, debitis minus ea nam error aliquam ab nemo corporis, perspiciatis autem. Facilis?
                    </ItemsSubContent>

                </BoxContent>
                <BoxContent>
                    <ItemsContent>Introduccion</ItemsContent>
                    <ItemsSubContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor consectetur aliquam repellat voluptatibus! Amet, odit. Tempora, ipsam, debitis minus ea nam error aliquam ab nemo corporis, perspiciatis autem. Facilis?
                    </ItemsSubContent>

                </BoxContent>
                <BoxContent>
                    <ItemsContent>Introduccion</ItemsContent>
                    <ItemsSubContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor consectetur aliquam repellat voluptatibus! Amet, odit. Tempora, ipsam, debitis minus ea nam error aliquam ab nemo corporis, perspiciatis autem. Facilis?
                    </ItemsSubContent>

                </BoxContent>
                </Content>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 328px 624px;
    grid-template-areas: "Table Title"
                          "Table Content";
    row-gap: 30px;
    column-gap: 91px;
`
const Table = styled.div `
    grid-row: 2 / 3; 
`
const BoxSubTable = styled.div `
    padding:24px 16px;
    position:sticky;
    z-index:auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
    position:sticky;
    margin:0;
`
const TitleTable = styled.h4 `
    font-size:21px;
    color:#212429 ;
    margin-bottom: 1rem;
`
const TableItem =  styled.a `
    font-size: 16px;
    line-height: 16px;
    padding: 16px;
    border-left: 2px solid rgb(232, 234, 239);
    cursor: pointer;
    user-select: none;
    transition: all 300ms ease 0s;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color:${props => props.activado ? '#0803d2': '#212429'} ;
    opacity: ${props => props.activado ? '1': '0.5'} ;;
`

const Title = styled.h2 `
    grid-area: Title;
    font-size:64px;
    color:black;
    line-height: 78px;
    margin:0;
    font-weight: 700;
`

const  Content =  styled.div `
    grid-area: Content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr ;
    row-gap: 30px;
    & > p {
        margin:0;
    }
`
const BoxContent = styled.article `

`
const ItemsContent =  styled.h4 `
    font-size:24px;
    color:#212429;
    margin:0px 0px 16px;
`
const ItemsSubContent = styled.p  `
    color:#212429; 
`


