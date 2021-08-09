import {useState} from 'react'
import styled from 'styled-components';
import Inglaterra from '../../assets/images/svgs/Inglaterra.svg'
import Espanish from '../../assets/images/svgs/Espanish.svg'
import Francia from '../../assets/images/svgs/French.svg'
import { FaTrashAlt } from "react-icons/fa";
import  {useSelector,useDispatch} from 'react-redux'
import {Delete_Package} from '../../redux/actions/packageAction';
// import {Link} from 'react-router-dom'
import {isAuth} from '../../helpers/Auth'
import ModalSignIn from '../ModalsForm/ModalSignIn';

export default function OrderPay(props) {
    // States 
    const  {items} = useSelector(state => state.package)

    // states   Modal 
    const [ShowModal, setShowModal] = useState(false);
    // end State Modal 

    const dispatch =  useDispatch();
    const ShowBanderas = (idiom)=>{
        switch (idiom) {
            case 'English':
                return <img src={Inglaterra} width="200" height="200"  />
            case 'Spanish':
                return  <img src={Espanish} width="200" height="200" />
            case 'French':
                return <img src={Francia}  width="200" height="200" />
            default:
                return 'nada';
        }
    }

    const ClickDelete = (idiom)=>{
        dispatch(Delete_Package(idiom))
    }

    let res = '';

    if(items){
        const arrayPrices = [];

        items.map(val => arrayPrices.push(val.price))

        console.log(arrayPrices)

        res = items.reduce((acc,item)=>{
            return  acc +=  item.price;
        },0)

        res =  parseFloat(res).toFixed(2)
    }

    const VerifyIsAuth = () => {
        
        if(isAuth()){
            props.history.push('/payclient')
        }
        
        OpenModal()
        console.log('No estas Authenticado')

    }

    const OpenModal  = () =>{
        console.log('Open')
        setShowModal(prev => !prev);
    }

    return (
    <>
        <Container >
            <SectionOrder >
                <TextOrder>Order Summary</TextOrder>

                {
                    items.map((item,index)=>(
                        <>
                            <BoxContentOrderSummary key={index}>
                                <BoxImages>
                                    { ShowBanderas(item.idiom) }
                                </BoxImages>
                                <BoxContent>
                                    <ListContent>
                                        <ItemListContent> <TextFuerte> Language: </TextFuerte>{item.idiom}</ItemListContent>
                                        <ItemListContent> <TextFuerte>Lesson Type:</TextFuerte> Individual. </ItemListContent>
                                        <ItemListContent><TextFuerte> Number of de lessons: </TextFuerte>{item.lesson} </ItemListContent>
                                        <ItemListContent><TextFuerte>duration of lessons:</TextFuerte> {item.time}</ItemListContent>
                                        <br />
                                        <ItemListContent>Subtotal: ${item.price}</ItemListContent>
                                    </ListContent>
                                </BoxContent>
                                
                                <BoxButton>
                                    <ButtonDelete onClick={ () => ClickDelete(item.idiom) }  >
                                        <Icontrash />
                                    </ButtonDelete>
                                </BoxButton>

                            </BoxContentOrderSummary>
                            <hr style={{margin:"0"}} />
                        </>
                    ))
                }
                <BoxPrices>
                    <div>
                        <TextPrices>$ {res} </TextPrices>
                        <br />
                        <ProccedPay onClick={ VerifyIsAuth } >Proced to Pay</ProccedPay> 
                    </div>
                </BoxPrices>
            </SectionOrder>
        </Container>
        <ModalSignIn ShowModal={ShowModal} setShowModal={setShowModal} /> 
    </>
    )
}


const  Container = styled.div `
    margin: 0px  40px !important;
`

const SectionOrder = styled.section `
    width: 100%;
`
const TextOrder = styled.h2`
    margin-top: 10px;
    margin-left:20px;
    margin-bottom:0!important;
`
const BoxContentOrderSummary = styled.div `
    padding:20px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    &:hover{
        background: rgba(0,0,0,.1)
    }
`
const BoxImages = styled.div `

`
const BoxContent = styled.div `
    margin-left:20px;
    width: 70%;
`
const ListContent =  styled.ul `
    list-style:none;
    margin-left: 50px;
    margin-top:20px;
`
const ItemListContent =  styled.li `
    font-size: 26px;
    /* color:#57606f; */
    /* font-weight: 700; */
    `
const TextFuerte = styled.span `
    /* font-weight: 700; */
    /* color:#2f3542; */
    color:#FF3946;


`
const ButtonDelete = styled.div`
    border-radius:50%;
    background-color: #ff4d4d;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
   &:hover{
    background-color: #ff3838;
   }
`
const Icontrash = styled(FaTrashAlt)`
    color:white;
    font-size:20px;
`

const BoxButton = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const BoxPrices = styled.div `
    display:flex;
    justify-content: flex-end;
`
const TextPrices = styled.span`
    font-size:50px;
`
const ProccedPay = styled.button`
    padding:8px 16px;
    border:none;
    background-color: #314584;
    color:white;
    border-radius: 8px;
    font-size:1rem;
    margin-bottom: 100px;
`