import { useState } from 'react'
import styled from 'styled-components'
import FormSublevels  from './SubLevels'
import SubLevelA2 from  './SubLevelA2'
import SubLevelB1  from './SubLevelB1'
import SubLevelB2 from './SubLevelB2'
import SubLevelC1 from './SubLevelC1'
import SubLevelC2 from './SubLevelC2'



export default function FormTemary() {


const [SubLevelItem,setSubLevel] = useState('A1.1');
const [SubLevelItem2, setSubLevelItem2] = useState('A2.1')
const [SubLevelItemB1, setSubLevelItemB1] = useState('B1.1')
const [SubLevelItemB2, setSubLevelItemB2] = useState('B2.1')
const [SubLevelItemC1, setSubLevelItemC1] = useState('C1.1')
const [SubLevelItemC2, setSubLevelItemC2] = useState('C2.1')


    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-6 mt-4">
                    <Card>
                        <h3 className="text-center">Level A1</h3>
                        <hr />
                        <Buttons >
                            <BtnSubLevel onClick={()=>setSubLevel('A1.1')} >A1.1</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevel('A1.2')} >A1.2</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevel('A1.3')} >A1.3</BtnSubLevel>
                        </Buttons>
                        <hr />

                        <FormSublevels  subLevel={SubLevelItem} Level="A1" />

                    </Card>

                    
                    </div>
                    <div className="col-md-6 mt-4">
                        <Card>
                            <h3 className="text-center">Level A2</h3>
                        <hr />
                        <Buttons >
                            <BtnSubLevel onClick={()=>setSubLevelItem2('A2.1')} >A2.1</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItem2('A2.2')} >A2.2</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItem2('A2.3')} >A2.3</BtnSubLevel>
                        </Buttons>
                        <hr />
                        <SubLevelA2  subLevel={SubLevelItem2} Level="A2" />
                    </Card>
                    </div>


                    <div className="col-md-6 mt-4">
                        <Card>
                            <h3 className="text-center">Level B1</h3>
                        <hr />
                        <Buttons >
                            <BtnSubLevel onClick={()=>setSubLevelItemB1('B1.1')} >B1.1</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemB1('B1.2')} >B1.2</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemB1('B1.3')} >B1.3</BtnSubLevel>
                        </Buttons>
                        <hr />
                        <SubLevelB1  subLevel={SubLevelItemB1} Level="B1" />
                    </Card>
                    </div>

                    <div className="col-md-6 mt-4">
                        <Card>
                            <h3 className="text-center">Level B2</h3>
                        <hr />
                        <Buttons >
                            <BtnSubLevel onClick={()=>setSubLevelItemB2('B2.1')} >B2.1</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemB2('B2.2')} >B2.2</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemB2('B2.3')} >B2.3</BtnSubLevel>
                        </Buttons>
                        <hr />
                        <SubLevelB2  subLevel={SubLevelItemB2}  Level="B2" />
                    </Card>
                    </div>
                    <div className="col-md-6 mt-4">
                        <Card>
                            <h3 className="text-center">Level C1</h3>
                        <hr />
                        <Buttons >
                            <BtnSubLevel onClick={()=>setSubLevelItemC1('C1.1')} >C1.1</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemC1('C1.2')} >C1.2</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemC1('C1.3')} >C1.3</BtnSubLevel>
                        </Buttons>
                        <hr />
                        <SubLevelC1  subLevel={SubLevelItemC1} Level="C1" />
                    </Card>
                    </div>
                    <div className="col-md-6 mt-4">
                        <Card>
                            <h3 className="text-center">Level C2</h3>
                        <hr />
                        <Buttons >
                            <BtnSubLevel onClick={()=>setSubLevelItemC2('C2.1')} >C2.1</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemC2('C2.2')} >C2.2</BtnSubLevel>
                            <BtnSubLevel onClick={()=>setSubLevelItemC2('C2.3')} >C2.3</BtnSubLevel>
                        </Buttons>
                        <hr />
                        <SubLevelC2  subLevel={SubLevelItemC2} Level="C2" />
                    </Card>
                    </div>

                </div>
            </Container>

        </div>
    )
}

const Container =  styled.div `
    margin: 0 30px;
    margin-top: 50px;
`

const Card = styled.div `
    padding:20px;
    border:1px solid silver;
    border-radius: 5px;
`
const Buttons = styled.div `
    display: flex;
    justify-content: space-around;
`

const BtnSubLevel = styled.button`
    border:none;
    padding:4px 10px;
    background: #3867d6;
    color:white;
    margin:0 4px;
    border-radius:5px;
    font-size:1rem;
    width:4rem;
    &:hover{
        background:#185ADB;
    }
`

