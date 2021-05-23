import '../../assets/components/ImageForm.css';
import styled from 'styled-components';


export const SignIn = ()=>{
    const ButtonSubmit = styled.button`
        border-radius:10px;
        border:2px solid #314584 ; 
        padding:8px  24px 4px 24px;
        font-size:20px;
        background:transparent;
        color:#314584;
        transition:.2s ease-in-out;
        margin:0 auto;
        &:hover{
            color:white;
            padding:8px  30px 4px 30px;
            background:#314584;
            
        }
    `
    const Linea = styled.hr `
        margin-top:30px;
        width:100%;
    `
    const Or = styled.span `
        color: #6c757d;
        font-size:18px;
        font-weight:600;
        display:flex;
        justify-content:center;
    `
    
    const Centrar = styled.div `
        display:flex;
        justify-content:center;
        margin: 10px 0;
    `
    const  ButtonGoogle = styled.a `
        font-size:20px;
        background:  #FF3946 ;
        padding:5px 20px;
        color:white;
        transition: .2s ease-in-out;
        &:hover{
            color:white;
            padding: 5px 25px;
        }
    `

        // ##########  estados ############ 
      
        
        //#################################
        

        

    return(
        <>
            <div className="container ">
               
                    <h1 className="text-center mt-5">Bienvenido</h1>
                    <div className="row ">
                        <div className="col-md-6   ">
                            <form  >
                                <div className="row mt-4">
                                    <div className="col-12 col-md-12 ">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input 
                                                type="email"
                                                className="form-control"
                                                placeholder="Email@example.com"    
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input 
                                                type="password"
                                                className="form-control"
                                                
                                                />
                                        </div>
                                    </div>
                                    <ButtonSubmit >Submit</ButtonSubmit>
                                </div>
                                
                            </form>
                            <Linea></Linea>
                            <Or>Or</Or>
                            <Centrar>
                                <ButtonGoogle href="http://192.168.1.3:4000/google" >Google</ButtonGoogle>
                            </Centrar>
                        </div>

                        <div className="col-md-6 ">
                            <div className="card" >
                                
                            </div>
                        </div>
                </div>
                
            </div>
        </>
    );
}
