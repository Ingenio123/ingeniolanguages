import { useState } from "react";
import styled , {css} from "styled-components";
import { IoSearch,IoCheckmarkSharp} from "react-icons/io5";
import { BsFillUnlockFill,BsLockFill } from "react-icons/bs";
import { useEffect } from "react";
import axios from 'axios';
import { getCookie } from '../../../helpers/Auth';
import Url from '../../Urls'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialForm = {
  student: "",
};


function SearchStudent({ handleSearch }) {

  const [form, setForm] = useState(initialForm);
  const [DataStudents, setDataStudents] = useState([])
  const [text, setText] = useState('')
  const [suggestion, setSuggestion] = useState([])
  const [DataOneStudent, setDataOneStudent] = useState({
    Name:'',
    courses:[],
    lessonsTotal: '',
    lessonsRestantes: ''
  });

  const token = getCookie('token');
  const [DateCalendar, setDateCalendar] = useState(new Date())
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleSearch(form);
    setForm(initialForm);
  };

  const loadStudents =  async () =>{
    const EndPoint = Url.url + '/data/getAllStudents'
    const res = await axios.get(EndPoint,{
        headers:{
            Authorization: `Bearer ${token}`
        } 
    })

    if(res) return  setDataStudents(res.data.students);
    return setDataStudents(null)
  }

  const onChangeHandler = (text)=>{
    let matches = [];
    
    if(text.length > 0){
        matches = DataStudents.filter(student=>{
          const regex = new RegExp(`${text}`, "gi");
          return student.FirstName.match(regex)
        })
    }
    setSuggestion(matches)
    setText(text)
  }

  const  onSuggestHandler = (text)=>{
    setDataOneStudent({
      ...DataOneStudent,
      Name: text.FirstName,
      courses: text.courses,
      lessonsTotal: 0,
      lessonsRestantes: 0
    })
    setText(text.FirstName);
    setSuggestion([])

  }
  function showData(courses){
    console.log(courses)
    if(courses.length> 1){
      const cursos = courses.map((item,index)=> <> 
            <Options value={item.nameCourse} >{item.nameCourse}</Options>
         </>) ;
      return (
        <>
          <Select  >
            {cursos}
          </Select>
        </>
        )
      ;
    }

    if(courses.length != 0){
      return (
        <>
          <span>{courses[0].nameCourse} </span>
        </>
      )
    }

    return '';
  }

  useEffect(() => {
    loadStudents();

  }, [])

  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <SearchBox>
          <Input
            type="text"
            placeholder="Student's Name"
            onChange={e => onChangeHandler( e.target.value )}
            value={text}
          />
          <Button type="submit ">
            <IconSearch />
          </Button>
        </SearchBox>
      </Form>
      <br/>


        {
          suggestion && suggestion.map((suggestion, i)=> 
            <BoxFatter>
              <BoxSearch>
                <ItemsSearch key={i} onClick={ ()=> onSuggestHandler( suggestion ) } > {suggestion.FirstName} </ItemsSearch>
              </BoxSearch>
            </BoxFatter>
          )
        }



        <BoxExample>
          <BoxCardStudent>

          

            <ItemsCard start={true}><DateText>Date </DateText>  <DatePickerStyle selected={DateCalendar} onChange={(date) => setDateCalendar(date)} /> </ItemsCard>
            {/* start Datos Estaticos  */}
            <ItemsCard block  >
              <p > <TextBold>Nombre:</TextBold> {DataOneStudent.Name}</p>
              <p ><TextBold>Idioma: </TextBold> { DataOneStudent.courses ?  showData(DataOneStudent.courses) : null } </p>
              <p><TextBold>Plan Active: </TextBold> { DataOneStudent.lessonsRestantes } </p>
              <p><TextBold>Cuanto le queda: </TextBold>{DataOneStudent.lessonsRestantes} </p>

            </ItemsCard>
            {/* end Datos Estaticos */}


            <ItemsCard block={true} > <ResumenLabel htmlFor="resumen">Class summary</ResumenLabel> <br/> <TextLarge id="resumen" cols="45"></TextLarge></ItemsCard>
            <ItemsCard block={true} > <ResumenLabel htmlFor="observacion">Comments</ResumenLabel> <br/> <TextLarge id="observacion" cols="45"></TextLarge></ItemsCard>
            <ItemsCard block={true} > 
                  <BoxLevels>
                      <ItemLevels active={true} ><NameLevel active={true} > Level A1 </NameLevel> <ButtonRevised active={true}> <IconRevised active={true} /> </ButtonRevised></ItemLevels>


                      <ItemLevels active={true} ><NameLevel active={true} > Level A2 </NameLevel> <ButtonRevisedYellow active={true}  > <IconUnLock active={true} /> </ButtonRevisedYellow ></ItemLevels>


                      <ItemLevels><NameLevel> Level B1 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      <ItemLevels><NameLevel> Level B2 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      <ItemLevels><NameLevel> Level C1 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      <ItemLevels><NameLevel> Level C2 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      
                    
                  </BoxLevels>

            </ItemsCard>
            
            
          </BoxCardStudent>
        </BoxExample>
    </div>
  );
}

export default SearchStudent;

// ##########################

const BoxLevels = styled.div `
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows: repeat(1,1fr);
  margin: 10px 0 40px;
  gap:5px;
`

const ItemLevels = styled.div `
  display:flex;
  ${'' /* justify-content:space-around; */}
  justify-content:space-between;
  align-items:center;
  width:100%;
  border-radius:10px;
  padding:4px 8px;
  background:${(props)=>(props.active ? "#314584" : "rgba(0,0,0,.4)")};
`
const NameLevel = styled.span `
  font-size:1rem;
  color:${(props)=>(props.active ? "white" : "rgba(0,0,0,.6)")};
`
const ButtonRevised = styled.div `
  display:flex;
  align-items:center;
  justify-content:center;
  width:23px;
  height:23px;
  border-radius:50%;
  border:2px solid white;
  background:${(props)=>(props.active ? "#44bd32":"white")};
`
const ButtonRevisedYellow = styled.div `
  display:flex;
  align-items:center;
  justify-content:center;
  width:23px;
  height:23px;
  border-radius:50%;
  border:2px solid white;
  background:${(props)=>(props.active ? "white":"white")};
`
const IconRevised =  styled(IoCheckmarkSharp) `
  font-size:12px;
  color: ${(props)=>(props.active ? "white" : "rgba(0,0,0,.3)")};
`

const IconUnLock = styled(BsFillUnlockFill) `
  font-size:12px;
  color: ${(props)=>(props.active ? "rgba(0,0,0,.6)" : "rgba(0,0,0,1)")};
`

const IconLock = styled(BsLockFill)`
  font-size:12px;
  color: ${(props)=>(props.active ? "rgba(0,0,0,.6)" : "rgba(0,0,0,.6)")} ;
`
// #####  TIME LINE ##########

const BoxTimeLine = styled.div `
  display:grid;
  grid-template-columns: repeat(5,1fr);
  grid-template-rows: repeat(1,1fr);
  margin:10px;
`
const CircleTimeLine = styled.div `
  ${'' /* justify-self:center; */}
  width:20px;
  height:20px;
  background: ${(props)=> (props.check?  "#66C958" : "#919191" )} ;
  border:2px  solid white;
  border-radius:50%;
  z-index:99999;
  cursor:pointer;
  position:relative;
  &::before {
    display:block;
    position:absolute;
    content: '';
    background:rgba(145,145,1145,.4);
    width:50px;
    height:4px;
    left:14px;
    top:6px;
  }
`
// const Line = styled.hr  `
//   position:relative;
//   top:-19px;
//   z-index:0;
//   background:rgba(49,69,132,.5);
//   width:75%;
//   height:2px;
//   margin: 0 auto ;
// `

// ##########################


const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SearchBox = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width: 250px;
  background: #314584;
  padding:4px;
  padding-right: 0;
  border-radius: 30px;
`;

const Input = styled.input`
  background: transparent;
  width:200px;
  color: white;
  border: none;
  padding-left: 10px;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right:10px;
`;
const IconSearch = styled(IoSearch)`

  margin: 0 auto;
  color: #314584;
`;

const BoxFatter = styled.div `
  display:flex;
  justify-content:flex-end;
  position:relative;
  width:100%;
`

const BoxSearch = styled.div `
  position:absolute;
  display:flex;
  width: 250px;
  max-height:120px;
  background: #fff;
  overflow: auto;
  z-index:1;
  &::-webkit-scrollbar{
    background:rgba(0,0,0,.3);
    width:3px;
  }
  &::-webkit-scrollbar-thumb{
    background: #314584;
  } 
`

const  ItemsSearch = styled.p `
  width:100%;
  padding-left:16px;
  color:black;
  z-index:1;
  &:hover {
    background: rgba(0,0,0,.3);
    cursor:pointer;
    
  }
  
`

const BoxExample = styled.div `
  ${'' /* background:green; */}
  width:100%;
  display:grid;
  grid-template-columns:repeat(2,1fr);
`

const BoxCardStudent = styled.div `
  ${'' /* display:none; */}
  width:80%;
  background:#f2f2f2;
  grid-column: 1/3;
  border-radius:8px;
  justify-self:end;
`

const ItemsCard = styled.div `
  width:100%;
  display:${(props)=> (props.block ? "block": "flex")};
  justify-content:${(props)=> (props.start ? "flex-start" : "")};
  align-items:center;
  padding:10px;
  padding-bottom:0;
  &>p{
    margin: 0;
    border:  ${(props) => (props.border ? "1px solid black": "none" )};
    line-height : 1;
    padding: .4rem 0;
    color: #314584; 
  }
`
const TextBold  = styled.span`
  font-weight: 600;
`

const ItemText =  styled.span  `
  font-size:1rem;
  font-weight:700;
`
const InputFecha = styled.input `
  color: #314584;
  width:100px;
  background:none;
  border:none;
  padding:5px;
  margin-left:5px;
`
const ResumenLabel = styled.label `
  font-size:1rem;
  font-weight: 600;
  font-size:1.1rem;
`
const TextLarge = styled.textarea `
  background:transparent;
  color:#314584;
  border:1px solid rgba(49,69,132,.6);
  outline:none;
  resize: none;
  padding:5px;
  width:100%;
  font-size:1.1rem;
  font-weight:400;
  line-height: 1.1;
  &:focus {
    border:1px solid #00A1F1;
  }

  &::-webkit-scrollbar{
    width:3px;
  }

  &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 10px gray;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #314584;
  }
`


const Select = styled.select `
  padding: .2rem 1rem .2rem 0 ;
  font-size: 1rem;
  color: #546E7A;
  border-radius: 4px;
  width:50%;
  &:focus{
    outline: none;
    border-color:  #0077FF;
    box-shadow:0 0 0 2px rgba(#0077FF,.2);
  }
`
const Options =  styled.option`
  
`

const DatePickerStyle = styled(DatePicker)`
  margin-left: 10px;
  padding:.4rem 0 ;
  padding-right: 1rem;
  padding-left: .5rem;
  color: #455A64;
  border: 1px solid #B0BEC5;
  line-height: 1;

  &:focus{
    outline: none;
    border:1px solid #1565C0;
  }
`
const DateText = styled.span`
  color: #314584;
  line-height: 1;
  font-size:1rem;
  font-weight: 700;
`